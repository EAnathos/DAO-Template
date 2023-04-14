require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.9",
  defaultNetwork: "sepolia",
  networks: {
    sepolia: {
      url: process.env.QUICKNODE_HTTP_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
