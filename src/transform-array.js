const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let newArr = []
  let next = false
    for(let i = 0; i<arr.length; i++){
      switch(arr[i]){
        case "--discard-next":
          if(arr[i+1]!=arr[arr.length-1])
            newArr.splice(i,0, undefined)
            next=true
          break
        case "--discard-prev":
          if(i!=0)
            newArr[newArr.length-1]=undefined
          break
        case "--double-next":
            if(i+1<arr.length)
              newArr.splice(i,0, arr[i+1])
          break
        case "--double-prev":
          if(i!=0)
            newArr.splice(i,0, newArr[newArr.length-1])
          break
        default:
          next?next=false:newArr.push(arr[i])
      }
  }
  return !newArr.length?[]:newArr.filter(a=>typeof a!=="undefined")
};
