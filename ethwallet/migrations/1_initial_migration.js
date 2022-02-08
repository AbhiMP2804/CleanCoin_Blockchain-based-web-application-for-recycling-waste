//var artifacts = require('truffle-artifactor');
const Migrations = artifacts.require("Migrations");
const DaiTokenMock = artifacts.require("DaiTokenMock");

module.exports = async function(deployer) {
  await deployer.deploy(Migrations);
  await deployer.deploy(DaiTokenMock);
  const tokenMock = await DaiTokenMock.deployed()
  // Mint 1,000 Dai Tokens for the deployer
  await tokenMock.mint(
    '0x8Fb626427D8459817fdb4B79209cb345F3CD2E4F',
    '1000000000000000000000'
  )
};
