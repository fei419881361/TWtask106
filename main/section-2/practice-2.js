'use strict';

module.exports = function countSameElements(collection) {
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
    return result_colecction;
}
