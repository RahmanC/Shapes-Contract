import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-etherscan";
require("dotenv").config();

const ALCHEMY_PROJECT_ID = process.env.ALCHEMY_PROJECT_ID;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;

if (!ALCHEMY_PROJECT_ID || !PRIVATE_KEY) {
  throw new Error("Please set your ALCHEMY_PROJECT_ID and PRIVATE_KEY");
}

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    hardhat: {
      allowUnlimitedContractSize: true,
    },
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_PROJECT_ID}`,
      accounts: [PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
};

export default config;
