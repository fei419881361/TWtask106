'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
  var result_collection = [];
  var objec_collection = objectB.value;
  for(var i =0;i<collectionA.length;i++) {
      var num = collectionA[i].key;
      for(var j =0;j<objec_collection.length;j++) {
          if(num == objec_collection[j]) {
              result_collection.push(num);
          }
      }
  }
  return result_collection;
}
