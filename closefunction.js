function MyFunction(x) {
    function print() {
        console.log('Private Print');
    }
    // JSON object, must have Key:Value pair
    return {
        msg: function(str) {
            console.log('Message is ' + str + '   ' + x);
        },
        y: x++,
        display: function(str) {
            console.log(str + '   ' + x);
        }
    };
}

// define an instance of MyFunction
var o2 = new MyFunction(100);
o2.msg('ABCD');
o2.display('PQRS');