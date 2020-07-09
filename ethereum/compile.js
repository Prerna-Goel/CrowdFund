const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);

const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');
const source = fs.readFileSync(campaignPath, 'utf8'); //gives us access to contents of campaign file
const output = solc.compile(source, 1).contracts; //contains 2 output: from output of compiling campaign and campaign CampaignFactory

fs.ensureDirSync(buildPath); //checks if a directory exists and if doesnt exist this function will create that for us

//console.log(output);
for (let contract in output) {
  //let name = contract.replace(':', '');
  fs.outputJsonSync(
    path.resolve(buildPath, contract.replace(':', '') + '.json'), // it will build the path for file
    output[contract]
  );
}
