const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleAct) {
  let floatSample = parseFloat(sampleAct)
  if(typeof floatSample !== 'string' || !floatSample || 0>floatSample || floatSample>15){
    return false
  }
    //t=ln(n0/n)/k k=0.693/hlflife
  return Math.ceil(Math.log(MODERN_ACTIVITY/floatSample)/(0.693/HALF_LIFE_PERIOD))
};
