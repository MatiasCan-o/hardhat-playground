const {expect} = require("chai");
const {ethers} = require("hardhat");

describe("Mint NFT Contract", function () {
    let Artwork;
    let artwork;
    let owner;

    const TOKEN_URI = "EXAMPLE_TOKEN_URI";

    beforeEach(async function () {
        Artwork = await ethers.getContractFactory("Artwork");

        [owner] = await ethers.getSigners();
        artwork = await Artwork.deploy();
    })

    describe("Deployment", function () {
        it("Should have the correct owner", async function () {
            expect(await artwork.owner()).to.equal(owner.address);
        })

        it("Should have the correct balance after minting", async function () {
            const initialBalance = await artwork.balanceOf(owner.address)
            expect(initialBalance.toString()).to.equal("0");

            await artwork.mintNFT(owner.address, TOKEN_URI);

            const finalBalance = await artwork.balanceOf(owner.address)
            expect(finalBalance.toString()).to.equal("1");
        })
    })
})