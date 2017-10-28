'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
    var result_colecction = [];
    for(var i=0;i<collectionA.length;i++) {
        var flag = true;
        var objec = collectionA[i]; // key
        for(var j = 0;j<result_colecction.length;j++) {
            if(objec == result_colecction[j].key) {
                flag =false;
                result_colecction[j].count++;
            }
        }
        if(flag) {
            result_colecction.push({key:objec,count:1});
        }
    }
    //return result_colecction;
    var object_value = objectB.value;
    for(var i =0;i<result_colecction.length;i++) {
        var vaya = result_colecction[i];
        for(var j =0;j<object_value.length;j++) {
            if (vaya.key == object_value[j]) {
                vaya.count = vaya.count - parseInt(vaya.count/3)
                // vaya.count = parseInt(vaya.count);
                continue;
            }
        }
    }
    console.log(parseInt(5/3));
    return result_colecction;
}
