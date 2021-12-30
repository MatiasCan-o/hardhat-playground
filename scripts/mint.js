require('dotenv').config();
const { ethers } = require("hardhat");

const PUBLIC_KEY = process.env.PUBLIC_KEY;

const TOKEN_URI = "https://gateway.pinata.cloud/ipfs/QmNe7zzcqsLSEzTaYGTp1CsLNEafTuzLPgs7frrFdUg2Fd";

const contract = require("../artifacts/contracts/Artwork.sol/Artwork.json");
const contractAddress = "0x23441adfC5Bb6A107c84Be96CB1C3AF5E0b4ef6d";

async function mint() {
    const myArtwork = await ethers.getContractAt(contract.abi, contractAddress);
    const tx = await myArtwork.mintNFT(PUBLIC_KEY, TOKEN_URI);
    const receipt = await tx.wait();
    console.log("The hash of the transaction: ", receipt.transactionHash);
}

mint()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });