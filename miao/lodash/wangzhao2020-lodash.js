


var wangzhao2020 = function () {//将compace函数写到函数里边，最后返回对象

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


  return {
    //属性名与变量名相同时，compact: compact, 可以写为compact,
    //返回的compact属性为compact变量读到的compact函数;
    compact,

  }


}()  //函数后面加()即可调用该函数
//外层函数被调用，调用完成后返回了return里边的对象compact，并赋值给了变量wangzhao2020















var wangzhao20201208 = {

  compact: function compact(ary) {//函数表达式的名字相当于函数内部的变量
    //出现'假值'则不push，不出现则push
    var result = []
    compact()
    for (var i = 0; i < ary.length; i++) {
      if (ary[i]) {
        result.push(ary[i])
      }
    }
    return result
  },

}
