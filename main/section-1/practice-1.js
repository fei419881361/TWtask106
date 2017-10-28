'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  var result_collection = [];
  for(var i=0;i<collectionA.length;i++) {
      var num = collectionA[i];
      for(var j = 0;j<collectionB.length;j++) {
          if(num == collectionB[j]) {
              result_collection.push(num);
          }
      }
  }
  return result_collection;
}
