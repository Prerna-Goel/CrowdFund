import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xe40Db9a8e77af5D4a706B4553E585bf693B0c7F0'
);

export default instance;
