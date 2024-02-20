import { ethers } from 'hardhat'
import type { Signer } from 'ethers'
import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'

import { AltToken } from './../typechain-types/contracts/AltToken'
import { AltToken__factory } from './../typechain-types/factories/contracts/AltToken__factory'

chai.use(chaiAsPromised)

const { expect } = chai

describe('AltToken', () => {
  let altTokenFactory: AltToken__factory
  let altToken: AltToken

  describe('Deployment', () => {
    let deployer: Signer

    beforeEach(async () => {
      [deployer] = await ethers.getSigners()
      altTokenFactory = new AltToken__factory(deployer)
      altToken = await altTokenFactory.deploy()
    })

    it('should have the correct name', async () => {
      expect(await altToken.name()).to.equal('AltToken')
    })

    it('should have the correct symbol', async () => {
      expect(await altToken.symbol()).to.equal('AT')
    })

    it('should have the correct total supply', async () => {
      expect((await altToken.totalSupply()).toString()).to.equal('100')
    })

    it('should have correct balance after deployment', async () => {
      expect(await altToken.balanceOf(await deployer.getAddress())).to.equal('100')
    })
  })
})
