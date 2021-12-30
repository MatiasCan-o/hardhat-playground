async function deploy() {
    const Artwork = await ethers.getContractFactory("Artwork")
    const artwork = await Artwork.deploy()
    console.log("Contract deployed to address:", artwork.address)
}

deploy()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })