


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
    //先新建数组，并将array push进去
    // var ary = array.slice()//下面功能相同

    var ary = []
    for (var i = 0; i < array.length; i++) {
      ary.push(array[i])
    }

    //...后values的值组成了数组，先对这个数组每个元素进行判断
    //values分为两类，数值和数组，分别用不同的方法
    for (var i = 0; i < values.length; i++) {
      var a = values[i]
      if (Array.isArray(a)) {//a为数组，需要将数组的每个元素push到ary中
        // for (var j = 0; j < a.length; j++) {
        //   ary.push(a[j])
        // }下面功能相同
        a.forEach(it => {//forEach遍历所有数组或对象，并对其完成相对应的操作
          ary.push(it)  //将a的元素进行遍历，并将每个元素push到ary中
        })

      } else if (typeof (a) == 'number') {//a为数值，整体push到ary中
        ary.push(a) //push可以将数值和字符串添加到原数组中
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
    //思路：涉及到构造函数，构造函数学完去弄


  }



  //对数组或对象的元素遍历并执行某个操作（函数）
  //真正写好很难，暂不写
  function forEach(collection, iteratee) {
    //iteratee调用3个参数(value,index/key,collection)
    //先对集合进行遍历
    for (var i = 0; i < collection; i++) {
      var a = collection[i]
      iteratee(a)
    }
  }

  //如果value是数组则返回true，否则返回false
  function isArray(value) {
    //使用一个函数Object.prototype.toString.call()可以固定的输出"[object xxx]"xxx为各种类型
    return Object.prototype.toString.call(value) === "[object Array]"
  }

  //sum 求数组中值的总和
  function sum(array) {
    //遍历数组每个元素求和
    var sum = 0
    for (var i = 0; i < array.length; i++) {
      sum += array[i]
    }
    return sum
  }

  //reverse 反转数组的元素，改变原数组
  function reverse(array) {
    //从数组的最后一项，从后往前push到新数组
    var result = []
    var a = array.length
    for (var i = a - 1; i >= 0; i--) {

      result.push(array[i])
    }
    return result
  }

  //sortedIndex(array,value)
  //将value插入数组中，array为排序数组，value插入排序数组，下标尽量小,最后返回下标
  //题目使用二进制的方式检索决定value的值,这个不知道怎么弄
  function sortedIndex(array, value) {
    //让value和array的元素相比，遇到大于等于value的元素，就返回这个元素的下标
    var a = true
    for (var i = 0; i < array.length; i++) {
      if (array[i] >= value) {
        a = !true
        return i
      }
    }
    //如果array所有元素都比value小，那么返回最后一个下标
    return array.length - 1
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
    isArray,
    sum,
    reverse,
    sortedIndex,









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
