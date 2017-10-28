'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
    var object_value = objectB.value;
    for(var i =0;i<collectionA.length;i++) {
        var vaya = collectionA[i];
        for(var j =0;j<object_value.length;j++) {
            if (vaya.key == object_value[j]) {
                vaya.count = vaya.count - parseInt(vaya.count/3)
               // vaya.count = parseInt(vaya.count);
                continue;
            }
        }
    }
    console.log(parseInt(5/3));
    return collectionA;
}
