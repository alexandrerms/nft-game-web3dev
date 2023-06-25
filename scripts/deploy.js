const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
    const gameContract = await gameContractFactory.deploy(
        ["Iron madem", "Metallica", "Sepultura"],
        [
            "https://i.imgur.com/IeG5EeX.png",
            "https://i.imgur.com/rxkOKv5.png0",
            "https://i.imgur.com/CiPEM2t.jpeg",
        ],
        [100, 200, 300], // HP values
        [100, 50, 25], // Attack damage values
        "Deep Purple",
        "https://i.imgur.com/qNDBzbx.jpeg",
        10000,
        50
    );
    await gameContract.deployed();
    console.log("Contrato implantado no endereço:", gameContract.address);
};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();