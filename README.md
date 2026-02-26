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

## <picture> <img src="https://github.com/Salaar-Saaiem/EV-Adoption-Forecasting/blob/25cf376c3e3e651dad009fde041aab5d2da213c0/Assets/520.gif?raw=true" alt="🐾" width="32" height="32"></picture> Model Architecture 

<p align="center">
  <img src="https://github.com/Salaar-Saaiem/ChainBallot-A-Smart-Contract-Approach-To-Decentralized-Electoral-Systems/blob/main/Assests/ARCHITECTURE.png" alt="Accuracy & Loss" width="700"/>
</p>

---

## <picture> <img src="https://github.com/Salaar-Saaiem/EV-Adoption-Forecasting/blob/25cf376c3e3e651dad009fde041aab5d2da213c0/Assets/515.gif?raw=true" alt="🚀" width="32" height="32"></picture> Features

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

<p align="center">
  <img src="https://github.com/Salaar-Saaiem/ChainBallot-A-Smart-Contract-Approach-To-Decentralized-Electoral-Systems/blob/main/Assests/SESSION.png" alt="Accuracy & Loss" width="700"/>
</p>


---

### 👥 Role-Based Access Control (RBAC)
- Admin and Voter role segregation
- JWT-based authentication
- Secure login backed by MySQL database
- Controlled candidate registration

---

### 📊 Real-Time Vote Results

<p align="center">
  <img src="https://github.com/Salaar-Saaiem/ChainBallot-A-Smart-Contract-Approach-To-Decentralized-Electoral-Systems/blob/main/Assests/COUNTING.png" alt="Accuracy & Loss" width="700"/>
</p>


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
<p align="center">
  <img src="https://github.com/Salaar-Saaiem/ChainBallot-A-Smart-Contract-Approach-To-Decentralized-Electoral-Systems/blob/main/Assests/GAS%20EFFICIENCY%201.png" alt="Accuracy & Loss" width="700"/>
</p>
<p align="center">
  <img src="https://github.com/Salaar-Saaiem/ChainBallot-A-Smart-Contract-Approach-To-Decentralized-Electoral-Systems/blob/main/Assests/GAS%20EFFICIENCY.png" alt="Accuracy & Loss" width="700"/>
</p>

---

## 🔄 System Workflow
<p align="center">
  <img src="https://github.com/Salaar-Saaiem/ChainBallot-A-Smart-Contract-Approach-To-Decentralized-Electoral-Systems/blob/main/Assests/DFD%202.png" alt="Accuracy & Loss" width="700"/>
</p>
<p>

---

## 📷 Screenshots

### Login Page
<p align="center">
  <img src="https://github.com/Salaar-Saaiem/ChainBallot-A-Smart-Contract-Approach-To-Decentralized-Electoral-Systems/blob/main/Assests/LOGIN.png" alt="Accuracy & Loss" width="700"/>
</p>

### Admin Dashboard
<p align="center">
  <img src="https://github.com/Salaar-Saaiem/ChainBallot-A-Smart-Contract-Approach-To-Decentralized-Electoral-Systems/blob/main/Assests/ADMIN.png" alt="Accuracy & Loss" width="700"/>
</p>

### Voter Interface
<p align="center">
  <img src="https://github.com/Salaar-Saaiem/ChainBallot-A-Smart-Contract-Approach-To-Decentralized-Electoral-Systems/blob/main/Assests/VOTER.png" alt="Accuracy & Loss" width="700"/>
</p>

---

## <picture><img src="https://github.com/Salaar-Saaiem/EV-Adoption-Forecasting/blob/25cf376c3e3e651dad009fde041aab5d2da213c0/Assets/514.gif?raw=true" alt="⚙" width="32" height="32"></picture> **Installation & Setup**

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

## <picture> <img src="https://github.com/Salaar-Saaiem/EV-Adoption-Forecasting/blob/25cf376c3e3e651dad009fde041aab5d2da213c0/Assets/517.gif?raw=true" alt="🫆" width="32" height="32"></picture> Ownership & License

This project is the intellectual property of [Saaiem Salaar](https://www.linkedin.com/in/salaarsaaiem525) and is licensed under the [MIT License](LICENSE). This means you are free to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the software for personal or commercial purposes, provided that proper credit is given and the original license and copyright notice are included in all copies or substantial portions of the software. The software is provided "as is", without any warranty of any kind, express or implied, and the author is not liable for any claims, damages, or other liabilities arising from its use.
