var token = artifacts.require("./Token.sol");

module.exports = function(deployer) {
  deployer.deploy(token, 1000000, "TESTGUIDE", 6, "TGD");
};
