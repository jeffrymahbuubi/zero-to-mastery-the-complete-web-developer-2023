
//1. Make the above code have a function called checkDriverAge(). Whenever you call this function, you will get prompted for age. Use Function Declaration to create this function.
// Notice the benefit in having checkDriverAge() instead of copying and pasting the function everytime?
function checkDriverAge() {
    var age = prompt("Enter your age: ")
    if (Number(age) < 18) {
        alert("Sorry, you are too yound to drive this car. Powering off");
    } else if (Number(age) > 18) {
        alert("Powering On. Enjoy the ride!");
    } else if (Number(age) === 18) {
        alert("Congratulations on your first year of driving. Enjoy the ride!");
    }
}

//2. Create another function that does the same thing, called checkDriverAge2() using Function Expression.
var checkDriverAge2 = function () {
    var age = prompt("Enter your age: ")
    if (Number(age) < 18) {
        alert("Sorry, you are too yound to drive this car. Powering off");
    } else if (Number(age) > 18) {
        alert("Powering On. Enjoy the ride!");
    } else if (Number(age) === 18) {
        alert("Congratulations on your first year of driving. Enjoy the ride!");
    }
}


//BONUS: Instead of using the prompt. Now, only use console.log and make the checkDriverAge() function accept an argument of age, so that if you enter:
function checkDriverAge(age) {
    if (Number(age) < 18) {
        return alert("Sorry, you are too yound to drive this car. Powering off");
    } else if (Number(age) > 18) {
        return alert("Powering On. Enjoy the ride!");
    } else if (Number(age) === 18) {
        return alert("Congratulations on your first year of driving. Enjoy the ride!");
    }
}
