function all(arr, fun){
    if (arr == undefined || arr == []) {
      return true;
    }
    for (let i = 0; i < arr.length; i ++) {
      if (fun(arr[i]) == false) {
        return false;
      }
    }
    return true;
  }

console.log(all([1,2,3,4,5], function(v){return v<9})); // true
console.log(all([1,2,3,4,5], function(v){return v>9})); // false