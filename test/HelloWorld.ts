import "@nomicfoundation/hardhat-ethers";

import { ethers } from "hardhat";
import { expect } from "chai";

describe("Hello World",() => {
    it("should get the hello world",async () => {
        const HW = await ethers.getContractFactory("HelloWorld");
        const hello = await HW.deploy();
        await hello.waitForDeployment;

        expect(await hello.hello()).to.equal("Hello, World");
    });
} );