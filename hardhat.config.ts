import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-ethers"

type Config = import('hardhat/config').HardhatUserConfig;

const config:Config = {
  solidity: "0.8.28",
  networks:{
    hardhat:{
      chainId:31337
    }
  }
};

export default config;

//https://eth-sepolia.g.alchemy.com/v2/9gMJU4MC1yQo7EUgk_NJgqgcVQY9V5B4
//https://avax-fuji.g.alchemy.com/v2/9gMJU4MC1yQo7EUgk_NJgqgcVQY9V5B4