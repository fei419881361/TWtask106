'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  var result_collection = [];
  for(var i=0;i<collectionA.length;i++) {
    var num = collectionA[i];
      for(var j=0;j<collectionB.length;j++) {
        var son_collection = collectionB[j];
          for (var x =0;x<son_collection.length;x++) {
              if(num == son_collection[x]) {
                  result_collection.push(num);
              }
          }
      }
  }

  return result_collection;
}
