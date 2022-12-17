var database = [
    {
        username: "jeffry",
        password: "B1u2u3b4i5"
    }
]



var newsFeed = [
    {
        username: "Bobby",
        timeline: "I'm tired learning Javascript"
    },
    {
        username: "Tanya",
        timeline: "I love programming!!!"
    }
]

var userNamePrompt = prompt("Enter your username: ");
var passwordPrompt = prompt("Enter your password: ");

function signIn(user, pass) {
    if (user === database[0].username &&
        pass === database[0].password) {
        console.log(newsFeed)
    } else {
        console.log("Sorry, wrong username and password")
    }
}

signIn(userNamePrompt, passwordPrompt);