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
            "function count() public",
            "function getCount() public view returns(uint)",
        ],
        await provider.getSigner(),
    )

    const counter = document.createElement('div');
    async function getCount() {
        counter.innerHTML = await contract.getCount();
    }
    getCount();
    async function setCount() {
        return await contract.count();
    }
    const btn = document.createElement("button");
    btn.innerHTML = "increment";
    btn.onclick = async function (){
        const tx = await contract.count();
        await tx.wait();
        getCount();
    }

    document.body.appendChild(counter);
    document.body.appendChild(btn);
}

async function main(){
    await getContract();
} 

main();
