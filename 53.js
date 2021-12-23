// Declare the myGlobal variable below this line
const myGlobal= 10;

function fun1() {
    oopsGlobal = 5
    // Assign 5 to oopsGlobal Here

}

// Only change code above this line

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;We need a function that can transform a string into a number. What ways of achieving this do you know?

            Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}
