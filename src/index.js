module.exports = function getZerosCount(number) {
  var uns = 0,
  i = 5;
  
  while (i <= number) {
    var val = Math.floor(number / i);
    uns += val;
    i *=5; 
  }
  return uns;
  // your implementation
}
  // for (var i = 5; i <= number; i * 5) {
  //   var val = Math.floor(number / i);
  //   // var rem = number % i;
  //   // var val1 = (number - rem) / i;
  //   uns += val;
  // }