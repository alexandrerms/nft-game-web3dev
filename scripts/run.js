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

    let txn;
    // Só temos três personagens.
    // Uma NFT com personagem no index 2 da nossa array.
    txn = await gameContract.mintCharacterNFT(2);
    await txn.wait();

    txn = await gameContract.attackBoss();
    await txn.wait();

    txn = await gameContract.attackBoss();
    await txn.wait();

    // Pega o valor da URI da NFT
    let returnedTokenUri = await gameContract.tokenURI(1);
    console.log("Token URI:", returnedTokenUri);
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