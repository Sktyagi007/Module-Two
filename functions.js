// function without parameter and withou return type
function sayHello(){
    console.log("Hello world");
}
sayHello();

// function with parameter

function sum(num1,num2){
    let addition = num1+num2;
    console.log("addition of two numbers: "+ addition);
}
sum(3,5);

// functions with Returntype

function multiply(num1,num2){
    return num1*num2;
}
let ans = multiply(3,5);
console.log(ans);

// storing function in a variable

let a = function sub(num1,num2){
    return num1-num2;
}
console.log(a(10,5));

// IIFE without parameter

(function(){
    console.log("hello from iife");
})();

// IIFE with parameter
(function(num1,num2){
    console.log(num1/num2);
})(10,5);


