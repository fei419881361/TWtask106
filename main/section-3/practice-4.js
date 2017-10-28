'use strict';

module.exports = function createUpdatedCollection(collection, objectB) {
    var result_colecction = [];

    for(var i=0;i<collection.length;i++) {
        var flag = true;
        var strs = [];
        var key = 'a';
        var num = 1;
        if(collection[i].length>1){
            strs = collection[i].split('-');
            key = strs[0];
            num = parseInt(strs[1]);
        }
        else key = collection[i];

        for(var j = 0;j<result_colecction.length;j++) {
            if(key == result_colecction[j].key) {
                flag =false;
                result_colecction[j].count+=num;
            }

        }
        if(flag) {
            result_colecction.push({key:key,count:num});
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
    return result_colecction;
}
