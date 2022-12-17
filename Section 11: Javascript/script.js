

/***********************************************************************
 *  FUNCTION
 **********************************************************************/
// 1st Way Writing a Function
function sayHello() {
    console.log("Hello");
}
sayHello();

// 2nd Way Writing a Function
function sing(song) {
    console.log(song);
}
sing("Laa dii daa")

// 3rd Way of Writing a Function
function multiply(a, b) {
    return a * b;
}

// 4th Way of Writing a Function
function multiply(a, b) {
    if (a > 10 || b > 10) {
        return "that's too hard"
    } else {
        return a * b;
    }
}

// 5th Way of Wiritng a Function
function multiply(a, b) {
    return a * b;
}

var total = multiply(3, 4);
alert(total)

/***********************************************************************
 *  Data Structures: Arrays
 **********************************************************************/

var list = ["tiger", "cat", "panda", "bird"]

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
user.name
user.age
user.hobby
user.favouriteFood = "spinach";

//To show the object inside an array, use below, 
list[0].username

/***********************************************************************
 *  Javascript Terminology
 **********************************************************************/

//function declaration
function newFunction() {

}

//function expression
var newFunction = function () {

}

//expression
1 + 3;
var a = 2;
return true;

//calling or invoking a function
alert()
newFunction(param1, param2)

//assign a vriable
var a = true;

// function vs method
function thisIsAFunction() {

}

var obj = {
    thisIsAMethod: function () {

    }
}

thisIsAFunction()
obj.thisIsAMethod()

/***********************************************************************
 *  Loops
 **********************************************************************/

// Adding exclamation mark, ! at the end of the todos list.
var todos = [
    "clean room",
    "learn Javascript",
    "exercise",
    "brushteeth",
    "eat healthy"
]

for (var i = 0; i < todos.length; i++) {
    todos[i] = todos[i] + "!"
}

// Delete a finished to do list. But this method will result on halway through deleted todos
for (var i = 0; i < todos.length; i++) {
    todos.pop()
}

// Fix method to delete todos list
var todosLength = todos.length;
for (var i = 0; i < todosLength; i++) {
    todos.pop()
}


// While Loop Increasing counting
var counterOne = 0;
while (counterOne < 10) {
    console.log(counterOne);
    counterOne++
}

// While Loop Decreasing counting
var counterOne = 10;
while (counterOne > 0) {
    console.log(counterOne);
    counterOne--
}

// Do While Loop
var counterTwo = 10;
do {
    console.log(counterTwo);
    counterTwo--;
} while (counterTwo > 0);

// for loop vs forEach loop
var todos = [
    "clean room",
    "learn Javascript",
    "exercise",
    "brushteeth",
    "eat healthy"
]

var todosLength = todos.length
for (var i = 0; i < todosLength; i++) {
    console.log(todos[i], i)
}

// 1st Way to write forEach function
todos.forEach(function (todo, i) {
    console.log(todo, i)
})

// 2nd Way to write forEach function
function logTodos(todo, i) {
    console.log(todo, i);
}

todos.forEach(logTodos);