import { ethers } from 'hardhat'

async function main() {

  const [deployer] = await ethers.getSigners()

  console.log('Deploying contracts with the account: ', deployer.address)

  console.log('Account balance: ', (await deployer.provider.getBalance(deployer.address)).toString())

  const altTokenFactory = await ethers.getContractFactory('AltToken')
  const altToken = await altTokenFactory.deploy()

  console.log('AltToken deployed to:', (await altToken.getAddress()))
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
