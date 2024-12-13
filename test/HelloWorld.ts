import "@nomicfoundation/hardhat-ethers";

import {ethers} from "hardhat";
import {expect} from "chai";

describe("Hello World", () => {
    it("should get the hello world", async () => {
        const HW = await ethers.getContractFactory("HelloWorld");
        const hw = await HW.deploy();
        await hw.waitForDeployment();

        expect(await hw.hello()).to.equal("Hello, World!");
    });
});