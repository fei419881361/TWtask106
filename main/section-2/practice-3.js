'use strict';

module.exports = function countSameElements(collection) {
  var key ='a';
  var num =1;
  var result_colecction = [];

  for(var i=0;i<collection.length;i++) {
      var flag = true;
      key = collection[i].charAt(0); // key
      if(collection[i].length>1){
          num = getNum(collection[i]);
      }
      for(var j = 0;j<result_colecction.length;j++) {
          if(key == result_colecction[j].name) {
              flag =false;
              result_colecction[j].summary+=num;
              num = 1;
          }
      }
      if(flag) {
          result_colecction.push({name:key,summary:num});
          num = 1;
      }
  }
  return result_colecction;
}

function getNum(str) {
    var num ="";
    for (var i =0;i<str.length;i++) {
      var buf = parseInt(str.charAt(i));
        if(buf <= 9 || buf >= 0) {
            num += str.charAt(i);
        }
    }
    return parseInt(num);
}