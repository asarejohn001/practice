/*
Author: John Asare
Date: 2025/02/25
*/

/* Write a function subLength() that takes 2 parameters, 
a string and a single character. The function should search the string for the two occurrences 
of the character and return the length between them including the 2 characters. 
If there are less than 2 or more than 2 occurrences of the character the function should return 0. */

function subLength(string, char) {
    const matches = string.match(new RegExp(char, "g"))

    if (matches && matches.length === 2){
        const firstIndex = string.indexOf(char)
        const secondIndex = string.indexOf(char, firstIndex + 1)
        return secondIndex - firstIndex + 1
    } else {
        return 0
    }
}

console.log(subLength("Johnny", "n"))


function authenticate(username, password) {
    const passwordValue = password.value;
    if (username === "asarej01" && password === "") {
        console.log(`Enter password for ${password}`)
    } else {
        console.log ("Authenticated")
    }
}