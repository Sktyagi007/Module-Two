// empty object
let obj = {};
console.log(obj);

// let objSarthak  = {
//     Name: "Sarthak",
//     "last name": "tyagi",
//     Age: 22,
//     phonenumber: 8368029448
// }
// console.log(objSarthak);

let Hulk = {
    Name: 'Bruce Banner',
    Age: 67,
    Friends: ['Natasha','Tony','Steve','Strange'],
    address: {
        city: 'Gurugram',
        state: 'Haryana'
    },
    sayHi:function(){
        console.log("Hulk says hiiii")
    }
}
console.log(Hulk.Name);
console.log(Hulk.Friends);
console.log(Hulk.Friends[1]);
Hulk.sayHi();

// adding keys
Hulk.movies = ['avenger','endgame']
console.log(Hulk);
// remove
delete Hulk.movies;
console.log(Hulk);
// change value
Hulk.address.state ='New york'
Hulk.address.city = 'Queens'
console.log(Hulk);

console.log(Hulk['Name']);







