


var wangzhao2020 = function () {//将compace函数写到函数里边，最后返回对象

  //创建一个新数组，包含原数组中所有的非假值元素
  function compact(ary) {
    //出现'假值'则不push，不出现则push
    var result = []
    for (var i = 0; i < ary.length; i++) {
      if (ary[i]) {
        result.push(ary[i])
      }
    }
    return result
  }

  //将数组拆分成多个size长度的区块，并将这些区块组成一个新数组
  function chunk(array, size) {
    //新建两个数组，第一个数组根据长度进行push，第二个数组根据长度差值进行push
    var result = []

    for (var i = 0; i <= array.length; i += size) {//使用数组的slice方法，每隔size取对应范围的数组并push到新的数组result
      result.push(array.slice(i, size + i))
    }
    return result
  }

  //创建一个切片数组，去除array前面的n个元素（n默认为1）
  function drop(array, n = 1) {
    //从第n+1个元素开始push到新数组
    var result = []
    for (var i = n; i < array.length; i++) {
      result.push(array[i])
    }
    return result
  }

  //创建一个切屏数组，去除array尾部的n个元素（n默认为1）
  function dropRight(array, n = 1) {
    var result = []
    for (var i = 0; i < (array.length - n); i++) {
      result.push(array[i])
    }
    return result
  }

  //通过函数检查collection（集合）中的所有元素是否都返回真值。
  //一旦返回假值，即返回false
  function every(collection, predicate) {

    for (var i = 0; i < collection.length; i++) {
      if (!(predicate(collection[i], i, collection))) {
        return false
      }
    }
    return true
  }

  //通过函数检查collection（集合）中的所有元素是否有真。
  //有1个真值，即返回true
  function some(collection, predicate) {

    for (var i = 0; i < collection.length; i++) {
      if (predicate(collection[i], i, collection)) {
        return true
      }
    }
    return false
  }

  //遍历collection，返回第一个返回真值的元素
  function find(collection, predicate, fromIndex = 0) {
    //使用reduce遍历，出现第一个为true的值即返回元素
    for (var i = fromIndex; i < collection.length; i++) {
      if (predicate(collection[i], i, collection)) {
        return collection[i]
      }//对象的第一个元素
    }
  }

  //遍历collection,返回第一个返回真值的元素的下标
  function findIndex(array, predicate, fromIndex = 0) {
    //使用reduce遍历，出现第一个为true的值即返回元素
    for (var i = fromIndex; i < array.length; i++) {
      if (predicate(array[i], i, array)) {
        return i
      }//对象的第一个元素不知道怎么返回
    }
  }

  //从后往前遍历collecion,返回第一个返回真值的元素的下标
  function findLastIndex(array, predicate, fromIndex = array.length - 1) {
    //使用reduce遍历，出现第一个为true的值即返回元素
    for (var i = fromIndex; i >= fromIndex; i--) {
      if (predicate(array[i], i, array)) {
        return i
      }//对象的第一个元素不知道怎么返回
    }
  }

  //遍历collection,返回真值的所有元素的数组。
  function filter(collection, predicate) {
    //符合条件的push到新数组，使用reduce判断
    var result = []
    for (var i = 0; i < collection.length; i++) {
      if (predicate(collection[i], i, collection)) {
        result.push(collection[i])
      }
    }
    return result
  }

  //在数组的范围内用value替换array，范围可选（start到end不包含end）
  function fill(array, value, start = 0, end = array.length) {
    //选择对应范围的数组，让value给对应数组元素赋值
    for (var i = start; i < end; i++) {
      array[i] = value
    }
    return array
  }

  //




  return {
    //属性名与变量名相同时，compact: compact, 可以写为compact,
    //返回的compact属性为compact变量读到的compact函数;
    compact,
    chunk，
    drop,
    dropRight,
    every,
    some,
    find,
    findIndex,
    findLastIndex,
    filter,
    fill,



  }


}()  //函数后面加()即可调用该函数
//外层函数被调用，调用完成后返回了return里边的对象compact，并赋值给了变量wangzhao2020















// var wangzhao20201208 = {

//   compact: function compact(ary) {//函数表达式的名字相当于函数内部的变量
//     //出现'假值'则不push，不出现则push
//     var result = []
//     compact()
//     for (var i = 0; i < ary.length; i++) {
//       if (ary[i]) {
//         result.push(ary[i])
//       }
//     }
//     return result
//   },

// }
