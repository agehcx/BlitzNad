import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@openzeppelin/hardhat-upgrades";
import * as dotenv from "dotenv";

dotenv.config({ path: "../.env" });

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.19",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    hardhat: {
      chainId: 1337,
    },
    monad_testnet: {
      url: "https://testnet-rpc.monad.xyz",
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
      chainId: 41454, // Official Monad testnet chain ID
      gasPrice: 1000000000, // 1 gwei
      timeout: 60000,
    },
  },
  etherscan: {
    // Monad testnet explorer verification (when available)
    apiKey: {
      monad_testnet: "placeholder",
    },
    customChains: [
      {
        network: "monad_testnet",
        chainId: 41454,
        urls: {
          apiURL: "https://testnet-explorer.monad.xyz/api",
          browserURL: "https://testnet-explorer.monad.xyz",
        },
      },
    ],
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
};

export default config;

export default config;