import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-ethers";
import "hardhat-gas-reporter";

const dotenv = require('dotenv');
dotenv.config();

type Config = import('hardhat/config').HardhatUserConfig;

const config:Config = {
  solidity: "0.8.28",
  networks:{
    hardhat:{
      chainId:31337
    },
  avalanche_fuji_avax:{
    url:`https://avax-fuji.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
    //accounts:[process.env.PRIVATE_KEY]
    },
  sepolia_eth:{
    url:`https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
    accounts:[process.env.PRIVATE_KEY]
    }
  },
  gasReporter:{
    enabled:true
  },
  etherscan:{
    apiKey:{
      sepolia:process.env.ETHERSCAN_API
    }
  }
};
export default config;

