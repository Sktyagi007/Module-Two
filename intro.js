// console.log("hello world");
// variables in js
// let num = 10;
// console.log(num);

// let char = 'a';
// console.log(char);

// let str = 'I am string';
// console.log(str);

// let bool = true;
// console.log(bool);

// loops in js

for(let i = 1; i<5 ; i++){
    console.log(i);
}
let count=10;
while(count>0){
    console.log(count);
    count--;
}

// isprime

let n = 25;
let flag = 1;
for(let i = 2; i*i<=n; i++){
    if(n%i==0){
        flag = 0;
        break;
    }

} 
if(flag==1){
    console.log("prime");
}
else{
    console.log("not prime");
}