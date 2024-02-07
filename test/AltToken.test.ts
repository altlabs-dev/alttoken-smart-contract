import { ethers } from 'hardhat'
import type { Signer } from 'ethers'
import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'

import { AltToken } from './../typechain-types/contracts/AltToken'
import { AltToken__factory } from './../typechain-types/factories/contracts/AltToken__factory'

chai.use(chaiAsPromised)

const { expect } = chai

describe('TutorialToken', () => {
  let tutorialTokenFactory: AltToken__factory
  let tutorialToken: AltToken

  describe('Deployment', () => {
    let deployer: Signer

    beforeEach(async () => {
      [deployer] = await ethers.getSigners()
      tutorialTokenFactory = new AltToken__factory(deployer)
      tutorialToken = await tutorialTokenFactory.deploy(100)
      await tutorialToken.deployed()
    })

    it('should have the correct name', async () => {
      expect(await tutorialToken.name()).to.equal('Tutorial')
    })

    it('should have the correct symbol', async () => {
      expect(await tutorialToken.symbol()).to.equal('TUT')
    })

    it('should have the correct total supply', async () => {
      expect((await tutorialToken.totalSupply()).toString()).to.equal('100')
    })

    it('should have correct balance after deployment', async () => {
      expect(await tutorialToken.balanceOf(await deployer.getAddress())).to.equal('100')
    })
  })
})