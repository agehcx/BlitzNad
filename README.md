# BlitzNad Code Arena

A lightning-fast PvP coding platform built on the Monad testnet (EVM-compatible). Players compete in intense coding battles while staking tokens, with fair resolution via oracle verifiers and instant on-chain rewards.

## 🎯 Overview

BlitzNad combines learning, gaming, and earning by motivating developers to practice coding, learn smart contracts, and compete for real rewards in a trustless environment.

## 🏗️ Architecture

```
MonadSpeedCode/
├── contracts/          # Smart contracts (Solidity)
│   ├── src/
│   ├── test/
│   └── scripts/
├── frontend/           # Next.js web application
│   ├── src/
│   ├── public/
│   └── components/
├── backend/            # Oracle service (Node.js)
│   ├── src/
│   ├── sandbox/
│   └── api/
└── shared/             # Shared types and utilities
    ├── types/
    └── utils/
```

## 🎮 Core Features

### Match Modes
- **Speed Solve**: First correct solution wins
- **Optimization Battle**: Fastest runtime or lowest gas wins
- **CTF (Future)**: Exploit/patch contracts faster than opponent

### Smart Contracts
- **GameToken (ERC-20)**: Native staking/reward token $GAME
- **Arena Contract**: Match lifecycle, escrow, payouts
- **Badges (ERC-1155)**: Achievement NFTs and trophies

### Player Features
- Create and join matches with token staking
- Submit solutions for off-chain judging
- Earn rewards and NFT badges
- Leaderboard with ELO ranking system

## 🛠️ Tech Stack

- **Smart Contracts**: Solidity, OpenZeppelin, Hardhat
- **Frontend**: Next.js, React, Tailwind CSS, wagmi/viem
- **Backend**: Node.js, TypeScript, Docker sandbox, ethers.js
- **Database**: SQLite for match logs and ELO rankings
- **Storage**: IPFS/Pinata for challenges and test cases
- **Blockchain**: Monad testnet (EVM-compatible)

## 🚀 Getting Started

1. Install dependencies for each module
2. Deploy smart contracts to Monad testnet
3. Configure backend oracle service
4. Start frontend development server

## 📊 Monetization

- Match fees (2.5% protocol fee)
- Premium membership for exclusive challenges
- Sponsored challenges from companies
- NFT marketplace for badges and collectibles

## 🎯 Goals

- **Engagement**: Fun, competitive environment for developers
- **Education**: Learn blockchain coding through real challenges
- **Trustless Rewards**: Fair payouts via smart contracts
- **Scalability**: Leverage Monad's high throughput and low latency