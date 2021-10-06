import { ChainId } from '@zeroexchange/sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xeefBa1e63905eF1D7ACbA5a8513c70307C1cE441',
  [ChainId.ROPSTEN]: '0x53C43764255c17BD724F74c4eF150724AC50a3ed',
  [ChainId.KOVAN]: '0x2cc8688C5f75E365aaEEb4ea8D6a480405A48D2A',
  [ChainId.RINKEBY]: '0x42Ad527de7d4e9d9d011aC45B31D8551f8Fe9821',
  [ChainId.GÖRLI]: '0x77dCa2C955b15e9dE4dbBCf1246B4B85b651e50e',
  [ChainId.FUJI]: '0x9EfCe00Be4E0c2D9aEF18aACe4e273D9ebcf574a',
  [ChainId.AVALANCHE]: '0xd2b4cD0966D08fE000CED7B73DFcbD2Ec000759F',
  [ChainId.SMART_CHAIN_TEST]: '0x6e5BB1a5Ad6F68A8D7D6A5e47750eC15773d6042',
  [ChainId.SMART_CHAIN]: '0x1Ee38d535d541c55C9dae27B12edf090C608E6Fb',
  [ChainId.MOONBASE_ALPHA]: '0x690d6aF3be3Bb6fad679932a28086939214eC2c9',
  [ChainId.MUMBAI]: '0x935Bfe9AfaA2Be26049ea4EDE40A3A2243361F87',
  [ChainId.MATIC]: '0x95028E5B8a734bb7E2071F96De89BABe75be9C8E',
  [ChainId.HECO]: '0x60731f862b6066cd089717d81d96108eb964c796',
  [ChainId.MOONRIVER]: '0xA922EeEB7909E4a06DCb4b2bff0335Cd027cCfbF',
  [ChainId.FANTOM]: '0xb828C456600857abd4ed6C32FAcc607bD0464F4F',
  [ChainId.SHIDEN]: '0x3Be2130D4509C01B47Bd4a5AF45c1BBC0A9604c6',
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
