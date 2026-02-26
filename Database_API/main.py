# Import required modules
import dotenv
import os
import mysql.connector
from fastapi import FastAPI, HTTPException, status, Request
from fastapi.middleware.cors import CORSMiddleware
from mysql.connector import errorcode
import jwt
from pydantic import BaseModel

# Load environment variables
dotenv.load_dotenv()

# Initialize FastAPI app
app = FastAPI()

# CORS configuration
origins = [
    "http://localhost:8080",
    "http://127.0.0.1:8080",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Connect to MySQL database
try:
    cnx = mysql.connector.connect(
        user=os.environ['MYSQL_USER'],
        password=os.environ['MYSQL_PASSWORD'],
        host=os.environ['MYSQL_HOST'],
        database=os.environ['MYSQL_DB'],
    )
    cursor = cnx.cursor()
except mysql.connector.Error as err:
    if err.errno == errorcode.ER_ACCESS_DENIED_ERROR:
        print("Wrong MySQL username or password")
    elif err.errno == errorcode.ER_BAD_DB_ERROR:
        print("Database does not exist")
    else:
        print(err)


# -----------------------------
# Helper: Decode JWT
# -----------------------------
def decode_token(request: Request):
    auth_header = request.headers.get("authorization")
    if not auth_header:
        raise HTTPException(status_code=401, detail="Unauthorized")

    try:
        token = auth_header.replace("Bearer ", "")
        decoded = jwt.decode(token, os.environ['SECRET_KEY'], algorithms=['HS256'])
        return decoded
    except jwt.ExpiredSignatureError:
        raise HTTPException(status_code=401, detail="Token expired")
    except jwt.InvalidTokenError:
        raise HTTPException(status_code=401, detail="Invalid token")


# -----------------------------
# LOGIN ENDPOINT (FIXED)
# -----------------------------
@app.get("/login")
async def login(voter_id: str, password: str):
    try:
        cursor.execute(
            "SELECT role FROM voters WHERE voter_id = %s AND password = %s",
            (voter_id, password)
        )
        result = cursor.fetchone()

        if not result:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Invalid voter id or password"
            )

        role = result[0]

        # Generate JWT token
        token = jwt.encode(
            {"voter_id": voter_id, "role": role},
            os.environ['SECRET_KEY'],
            algorithm='HS256'
        )

        return {"token": token, "role": role}

    except mysql.connector.Error as err:
        print(err)
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Database error"
        )


# -----------------------------
# Request Model
# -----------------------------
class VoterCreate(BaseModel):
    voter_id: str
    password: str
    role: str = "voter"


# -----------------------------
# REGISTER VOTER (Admin Only)
# -----------------------------
@app.post("/register_voter")
async def register_voter(voter: VoterCreate, request: Request):
    decoded = decode_token(request)

    if decoded.get("role") != "admin":
        raise HTTPException(status_code=403, detail="Only admin can register voters")

    try:
        # Check duplicate voter_id
        cursor.execute("SELECT * FROM voters WHERE voter_id = %s", (voter.voter_id,))
        if cursor.fetchone():
            raise HTTPException(status_code=400, detail="Voter ID already exists")

        # Insert voter
        cursor.execute(
            "INSERT INTO voters (voter_id, password, role) VALUES (%s, %s, %s)",
            (voter.voter_id, voter.password, voter.role)
        )
        cnx.commit()

        return {"status": "success", "message": "Voter Registered Successfully"}

    except mysql.connector.Error as err:
        print(err)
        raise HTTPException(status_code=500, detail="Database error")


# -----------------------------
# GET ALL VOTERS (Admin Only)
# -----------------------------
@app.get("/get_voters")
async def get_voters(request: Request):
    decoded = decode_token(request)

    if decoded.get("role") != "admin":
        raise HTTPException(status_code=403, detail="Forbidden")

    try:
        cursor.execute("SELECT voter_id, role FROM voters")
        rows = cursor.fetchall()

        return [{"voter_id": row[0], "role": row[1]} for row in rows]

    except mysql.connector.Error as err:
        print(err)
        raise HTTPException(status_code=500, detail="Database error")