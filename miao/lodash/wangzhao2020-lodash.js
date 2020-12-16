


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

  //输出数组的第1个元素  1210
  function head(array) {
    return array[0]
  }

  //共3个参数，数组，value，fromIndex开始查询的位置（为负则从后往前查询）  1210
  function indexOf(array, value, fromIndex = 0) {
    //先从fromIndex的正负进行判断

    var a = false
    if (fromIndex >= 0) {
      for (var i = fromIndex; i < array.length; i++) {
        if (array[i] == value) {
          a = true
          return i
        }
      }
    } else {
      for (var i = array.length + fromIndex; i < array.length; i++) {
        if (array[i] == value) {
          a = true
          return i
        }
      }
    }
    if (a == false) {
      return -1
    }
  }

  //删除数组最后一个元素并返回  1210
  function initial(array) {
    //使用循环，push到倒数第二个元素
    var result = []
    for (var i = 0; i < array.length - 1; i++) {
      result.push(array[i])
    }
    return result
  }

  //将数组中的元素转为，用separator的字符串  1210
  function join(array, separator) {
    //新建一个字符串，然后循环叠加数组元素和分隔符,最后一个元素不加分隔符
    var result = ''
    for (var i = 0; i < array.length - 1; i++) {
      result += array[i] + separator
    }
    return result + array[i]
  }

  //输出数组最后一个元素  1210
  function last(array) {
    //直接根据长度返回最后一个数组
    return array[array.length - 1]
  }

  //类似于indexOf,区别是从后往前遍历  1210
  function lastIndexOf(array, value, fromIndex = array.length - 1) {
    //先从fromIndex的正负进行判断

    var a = false
    if (fromIndex >= 0) {
      for (var i = fromIndex; i > 0; i--) {
        if (array[i] == value) {
          a = true
          return i
        }
      }
    } else {
      for (var i = array.length + fromIndex; i > 0; i--) {
        if (array[i] == value) {
          a = true
          return i
        }
      }
    }
    if (a == false) {
      return -1
    }
  }

  //返回数组中的最大值，如果数组为空或假值返回underfined  1210
  function max(array) {
    //设置最大值，并循环数组元素进行对比，
    if (array.length == 0) {
      return undefined
    }
    var m = -Infinity
    for (var i = 0; i < array.length; i++) {
      if (!array[i]) {
        return undefined
      }
      m = (array[i] > m ? array[i] : m)
    }
    return m
  }

  //
  // function maxBy(array, iteratee) {
  //   //不会写，涉及到了对象和函数

  // }

  //
  function min(array) {
    //设置最小值，并循环数组元素进行对比，
    if (array.length == 0) {
      return undefined
    }
    var m = Infinity
    for (var i = 0; i < array.length; i++) {
      if (!array[i]) {
        return undefined
      }
      m = (array[i] < m ? array[i] : m)
    }
    return m
  }

  //重复n次给定字符串
  function repeat(string = '', n = 1) {
    //1.先对字符串进行重复，字符串直接相加即可
    var str = ''
    for (var i = 0; i < n; i++) {
      str += string
    }
    return str
  }

  //难度较高，先不做
  // function map()

  //创建新数组，将array与任何数组或值连接在一起
  function concat(array, ...values) {
    var ary = array.slice()  //等价于下面的函数
    // var result = []
    // for (var i = 0; i < array.length; i++){
    //   result.push(array[i])
    // }
    //先判断values的长度，并对每个元素逐个判断
    for (var i = 0; i < values.length; i++) {
      var a = values[i]
      if (typeof (a) == 'number') {//如果元素为数值，则直接push
        ary.push(a)
      } else if (Array.isArray(a)) {//如果元素为数组，则将数组的每个元素push到array后面

        for (var j = 0; j < a.length; j++) {
          ary.push(a[j])
        }
      }
    }
    return ary
  }


  //将数组嵌套层级减少1级
  function flatten(array) {
    //思路：使用扩展运算符，先让数组分开，然后然后将每个数组叠加
    return [].concat(...array)
  }
  function flatten2(array) {//方法2
    //思路：让array的每个元素，用concat进行连接
    var result = []
    for (var i = 0; i < array.length; i++) {
      result = result.concat(array[i])  //concat 方法可以直接连接数组和字符串
    }
    return result
  }
  function flatten3(array) {//方法3
    //思路：

  }





  return {
    //属性名与变量名相同时，compact: compact, 可以写为compact,
    //返回的compact属性为compact变量读到的compact函数;
    compact,
    chunk,
    drop,
    dropRight,
    every,
    some,
    find,
    findIndex,
    findLastIndex,
    filter,
    fill,
    head,
    indexOf,
    initial,
    join,
    last,
    lastIndexOf,
    max,
    min,
    repeat,
    flatten,
    concat,





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
