
exports.min = function min (array) {

if (!array) {
   return 0
}
  let a= 0
  let i =0;
  for (i= 0 ;i<array.length; i++ ) {
    if(a>array[i]){
      a = array[i]
    }
  }
  return  a ;

}

exports.max = function max (array) {
  if (!array) {
    return 0
  }
    let a= 0
    let i =0;
    for (i= 0 ;i<array.length; i++ ) {
      if(a<array[i]){
        a = array[i]
      }
    }
    return  a ;
}

exports.avg = function avg (array) {

  if (!array || !array.length) {
    return "0";
  }
    let a= 0
    let i =0;
    for (i= 0 ;i<array.length; i++ ) {
     a =array[i]+ a

    }
    a=a/array.length
    return  a ;

}
