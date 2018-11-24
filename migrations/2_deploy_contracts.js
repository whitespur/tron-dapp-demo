var dice = artifacts.require("./Dice.sol");

module.exports = function(deployer) {
  deployer.deploy(dice);
};
