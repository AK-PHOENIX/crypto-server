# 💹 Crypto Tracker — Full Stack MERN Application

A full-stack cryptocurrency tracker built with the MERN stack. This app fetches live top 10 crypto data using the CoinGecko API and stores it in MongoDB, with an hourly cron job to save historical snapshots.

---

## 📌 Features

### 🔍 Frontend (React + Vite + MUI)
- Displays top 10 cryptocurrencies
- Shows:
  - Coin Name
  - Symbol
  - Current Price (USD)
  - Market Cap
  - 24h % Change (color coded red/green)
  - Last Updated Time
- Dark mode UI with responsive table
- (Bonus) Search, sort, pagination
- Auto-refresh every 30 minutes *(optional upgrade)*

### ⚙ Backend (Node.js + Express + MongoDB)
- `GET /api/coins`: Fetches top 10 coins from CoinGecko and serves to frontend
- `POST /api/history`: Stores snapshot of current coin data into historical collection
- `GET /api/history/:coinId`: (Optional) Get history of specific coin

### ⏱ Automation
- Cron job runs every hour using `node-cron`
- Automatically fetches live data and stores it in:
  - `Crypto` (current)
  - `Historical` (hourly snapshots)

---

## 💡 Tech Stack Used

| Layer         | Tech                                 |
|---------------|--------------------------------------|
| Frontend      | React, Vite, Axios, Material UI      |
| Backend       | Node.js, Express, dotenv, node-cron  |
| Database      | MongoDB (Atlas)                      |
| Hosting       | Frontend: Netlify, Backend: Render   |
| API Provider  | CoinGecko API                        |

---

## ⚙ Setup Instructions

### 🛠 Local Installation

1. Backend Setup
bash
Copy
Edit
cd server
npm install
touch .env
