const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  return Array.isArray(members)?(members.map(a=>typeof a==='string'?a.toUpperCase().trim()[0]:'').sort().join('')):false
};
