const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disks, turnsSpeed) {
  return {'turns': 2**disks-1, seconds: Math.floor(((2**disks-1)*3600)/turnsSpeed)}
};
