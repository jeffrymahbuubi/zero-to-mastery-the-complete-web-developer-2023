var database = [
    {
        username: "jeffry",
        password: "B1u2u3b4i5"
    },
    {
        username: "sally",
        password: "123"
    },
    {
        username: "ingrid",
        password: "777"
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
    },
    {
        username: "Daniel",
        timeline: "Logic is difficult!!!"
    }
];

function isUserValid(username, password) {
    for (var i = 0; i < database.length; i++) {
        if (database[i].username === username &&
            database[i].password === password) {
            return true
        }
    }
    return false
}

function signIn(username, password) {
    if (isUserValid(username, password)) {
        console.log(newsFeed);
    } else {
        alert("Sorry, wrong username and password");
    }
}

var userNamePrompt = prompt("What\'s your username?");
var passwordPrompt = prompt("What\'s your password ");


signIn(userNamePrompt, passwordPrompt);