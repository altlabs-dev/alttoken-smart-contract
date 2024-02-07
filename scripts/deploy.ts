import { ethers } from 'hardhat'

async function main() {

  const altTokenFactory = await ethers.getContractFactory('AltToken')
  const altToken = await altTokenFactory.deploy(ethers.utils.parseUnits('100'))

  await altToken.deployed()

  console.log('AltToken deployed to:', altToken.address)
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
