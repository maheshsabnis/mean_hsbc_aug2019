// obj holds the reference of function body
// all 'this' prefixed members are public
// passing parameter to reference function is like constructor 
var obj = function(x) {
    this.add = function(a, b) {
        display();
        return a + b + x;
    };
    x++;
    this.mult = function(a, b) {
        display();
        return a * b * x;
    };

    function display() {
        console.log('I am display function');
    }
};

// lets create an instance of 'obj'
var o1 = new obj(10);
console.log('Add = ' + o1.add(10, 20));
console.log('Mult = ' + o1.mult(10, 20));