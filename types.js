var n1 = 100;
console.log('type of n1 = ' + typeof(n1));
n1 = "JavaScript";
console.log('type of n1 = ' + typeof(n1));

n1 = "1000XYZ";
var res1 = parseInt(n1);
console.log('Type of res1 = ' + typeof(res1) + ' Value of res1 = ' + res1);

n1 = "33.99dddd";
res1 = parseFloat(n1);
console.log('Type of res1 = ' + typeof(res1) + ' Value of res1 = ' + res1);

var a = 3;
var b = 2;
var res2 = a / b;
console.log(res2);