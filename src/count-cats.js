const CustomError = require("../extensions/custom-error");

module.exports = function countCats(twoDim) {
  return [].concat(...twoDim).filter(x=>x=='^^').length
};
