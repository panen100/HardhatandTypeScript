import {ethers} from "ethers";

// 1、判断浏览器环境中是否有ethereum全局变量
function getEth(){
    // @ts-ignore
    const eth = window.ethereum;

    if(!eth) {
        throw new Error("No ethereum provider found");
    }
    return eth;
} 

//2、判断账号是否可接入，钱包账号是否存在，账号长度非0
async function requestAccess(){
    const eth = getEth();
    const result = await eth.request({method:"eth_requestAccounts"}) as string[];

    return result && result.length > 0;
}

async function hasSigners(){
    const metamask = getEth();
    const signers = await metamask.request({method:"eth_accounts"}) as string[];
    return signers.length > 0;
}


//3、连接合约
async function getContract(){
    //（1) 合约的地址
    //（2）方法名
    //（3）provider
    //

    if(!await hasSigners() && !await requestAccess()) {
        throw new Error("No ethereum provider found");
    }

    const provider = new ethers.BrowserProvider(getEth());
    const contract = new ethers.Contract(
        process.env.CONTRACT_ADDRESS,
        [
            "function hello() pure public returns (string memory)"
        ],
        provider
    )
    document.body.innerHTML = await contract.hello();
}

async function main(){
    await getContract();
} 

main();
