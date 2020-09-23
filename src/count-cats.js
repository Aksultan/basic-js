const CustomError = require("../extensions/custom-error");

module.exports = function countCats(twoDim) {
  return [].concat.apply([], twoDim).filter(x=>x=='^^').length
};
