import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-ethers"

const dotenv = require('dotenv');
dotenv.config();

type Config = import('hardhat/config').HardhatUserConfig;

const config:Config = {
  solidity: "0.8.28",
  networks:{
    hardhat:{
      chainId:31337
    },
  sepolia_eth:{
    url:`https://avax-fuji.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
    accounts:[process.env.PRIVATE_KEY]
  }
  } 
};

export default config;

