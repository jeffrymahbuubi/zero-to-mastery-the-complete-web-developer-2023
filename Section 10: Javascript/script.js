

/***********************************************************************
 *  FUNCTION
 **********************************************************************/
// 1st Way Writing a Function
//  function sayHello() {
//      console.log("Hello");
//  }

// sayHello();

// 2nd Way Writing a Function
// function sing(song) {
//     console.log(song);
// }

// sing("Laa dii daa")

// 3rd Way of Writing a Function
// function multiply(a, b) {
//     return a*b;
// }

// 4th Way of Writing a Function
// function multiply(a,b) {
//     if (a > 10 || b > 10){
//         return "that's too hard"
//     }else {
//         return a*b;
//     }
// }

// 5th Way of Wiritng a Function
// function multiply(a, b) {
//     return a*b;
// }

// var total = multiply(3,4);
// alert(total)

/***********************************************************************
 *  Data Structures: Arrays
 **********************************************************************/

// var list=["tiger", "cat", "panda", "bird"]

/***********************************************************************
 *  Data Structures: Objects
 **********************************************************************/
// Objects is a collection of property
// A function inside an object is called a method
var user = {
    name: "John",
    age: 34,
    hobby: "Soccer",
    isMarried: false,
    spells: ["abakadraba", "shazam", "boo"],
    shout: function () {
        console.log("AHHHHHH")
    }
};

var list = [
    {
        username: "andy",
        password: "secret"
    },
    {
        username: "jess",
        password: "123"
    }

]

var emptyObj = {}
var nullObj = null;

// To show the property of an object use below, 
// user.name
// user.age
// user.hobby
// user.favouriteFood = "spinach";

//To show the list of use below, 
// list[0].username

