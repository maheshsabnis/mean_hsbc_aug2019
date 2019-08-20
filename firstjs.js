function doWork(x) {
    if (x) {
        var i = 10;
        console.log('In-side if statement  ' + i);
    }
    console.log('Out side of if statement  ' + i);
}

// doWork(true);
// doWork(false);

for (var j = 0; j < 5; j++) {
    console.log('inside loop   ' + j);
}
console.log('Out Side of loop  ' + j);
j++;
console.log('Out Side of loop after increament ' + j);