# ChainBallot - A Smart Contract Approach To Decentralized Electoral Systems

## Abstract

ChainBallot is a hybrid decentralized electoral framework designed to ensure secure, transparent, and tamper-resistant voting using Ethereum blockchain technology. The system integrates gas-optimized Solidity smart contracts for immutable vote recording with an off-chain backend infrastructure for scalable voter management, authentication, and administrative control.

By combining on-chain vote integrity with off-chain database synchronization, ChainBallot addresses scalability, cost efficiency, and role-based access limitations commonly observed in fully on-chain voting systems.

---

## 🏗 System Architecture

ChainBallot follows a **Hybrid On-Chain / Off-Chain Architecture**, consisting of:

1. Smart Contract Layer (Ethereum)
2. Authentication & Server Layer (Node.js)
3. Database & API Layer (FastAPI + MySQL)
4. Frontend Interaction Layer (HTML/CSS/JS)
5. Wallet Authentication Layer (MetaMask + Web3.js)

---

### 📌 Architecture Diagram

<div align="center">

🚧 **Architecture Diagram Placeholder**

[🔗 ADD ARCHITECTURE IMAGE LINK HERE]

</div>

---

## 🚀 Core Features

### 🔐 Blockchain-Based Voting
- Gas-optimized Solidity smart contracts
- Immutable vote recording on Ethereum blockchain
- One-wallet–one-vote enforcement
- Double-voting prevention using address mapping
- Configurable voting start and end timestamps
- Real-time vote count retrieval from blockchain

---

### ⏱ Session-Based Security
- 60-second controlled voting session window
- Automatic session expiration
- Prevention of prolonged or malicious voting attempts

---

### 👥 Role-Based Access Control (RBAC)
- Admin and Voter role segregation
- JWT-based authentication
- Secure login backed by MySQL database
- Controlled candidate registration

---

### 📊 Real-Time Vote Results

<div align="center">

📊 **Real-Time Result System Preview**

[🔗 ADD RESULTS SCREENSHOT LINK HERE]

</div>

- Live vote aggregation directly from blockchain state
- Transparent and publicly verifiable vote counts
- Dynamic frontend result updates

---

## 🛠 Technology Stack

- **Blockchain**: Ethereum, Solidity, Ganache
- **Smart Contract Framework**: Truffle
- **Backend (Server)**: Node.js, Express
- **Backend (Database API)**: FastAPI (Python)
- **Database**: MySQL
- **Frontend**: HTML, CSS, JavaScript
- **Wallet Integration**: MetaMask, Web3.js

---

## 🔐 Security Mechanisms

- Wallet-based identity verification
- Double voting prevention via address tracking
- Smart contract state validation
- Session timeout enforcement
- Backend-database synchronization checks
- Gas-optimized contract structure for reduced transaction cost

---

## ⛽ Gas Optimization Strategy

The smart contract minimizes unnecessary storage writes and redundant state updates to reduce gas consumption during:

- Candidate registration
- Vote casting
- Result retrieval

This improves cost efficiency while preserving blockchain immutability.

---

## 🔄 System Workflow

<div align="center">

🔄 **Workflow Diagram Placeholder**

[🔗 ADD WORKFLOW DIAGRAM LINK HERE]

</div>

---

## 📷 Screenshots

<div align="center">

🖥 **Admin Panel Screenshot**

[🔗 ADD ADMIN PANEL IMAGE LINK HERE]

<br><br>

🗳 **Voting Interface Screenshot**

[🔗 ADD VOTING PAGE IMAGE LINK HERE]

<br><br>

🦊 **MetaMask Transaction Screenshot**

[🔗 ADD METAMASK IMAGE LINK HERE]

</div>

---

## ⚙ Installation & Setup

Refer to `RUN.md` for complete setup instructions.

### Prerequisites
- Node.js & npm
- Python 3.x
- MySQL Server
- Ganache (running on port 7545)
- MetaMask browser extension

---

## 🎓 Research Contribution Highlights

- Hybrid On-Chain/Off-Chain Electoral Architecture
- Efficient Gas Consumption Smart Contract Design
- Real-Time Transparent Result Computation
- Session-Based Security Enforcement
- Role-Based Administrative Control
- Modular Multi-Backend Implementation

---

## 🔮 Future Enhancements

- Deployment on public Ethereum testnets
- Zero-Knowledge Proof integration
- Biometric-backed wallet verification
- IPFS-based decentralized voter registry

---

## 📄 License

ISC License

---

## 👨‍💻 Author

SAM  
Final Year Engineering Project  
2026
