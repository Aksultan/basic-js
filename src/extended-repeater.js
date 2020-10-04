const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str, options ) {
  let arr = []
  if(options.additionRepeatTimes === void(0) && options.addition)options.additionRepeatTimes = 1
  if(options.repeatTimes === void(0) && options.separator)options.repeatTimes = 1
  while(options.repeatTimes){
    arr.push(str+'')
    for(let i = options.additionRepeatTimes;i>0;i--){
      arr.push(options.addition+(i-1!=0?options.additionSeparator:''))
    }
    if(options.repeatTimes-1!=0)options.separator?arr.push(options.separator):arr.push("+")
    options.repeatTimes--
  }
  return arr.join("")
  
};
  