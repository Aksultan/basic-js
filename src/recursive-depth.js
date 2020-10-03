const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    // let depthArr = []
    return Math.max.apply(null, arr.reduce((x, y)=>{
      if(Array.isArray(y))x.push(this.calculateDepth(y))
      return x
      },[0]))+1
  }
};