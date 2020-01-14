// lowercase a = 97
// lowercase z = 122;
// uppercase A = 65;
// uppercase Z = 90

// String.fromCharCode(65) => A

// split string into array of strings
// convert all strings to char codes
// if char code > 96 && < 123 run lowercase(char)
// else if char > 64 && < 91 run uppercase(char)
// else return char
// join

console.log("testing");

function getCharCode(string) {
    return string.charCodeAt(0);
}

function lowerCase(charCode) {
    if (charCode >= 110) {
        result = charCode - 122 + 109;
        console.log(result);
        return String.fromCharCode(result);
    } else {
        result = charCode + 13;
        console.log(result);
        return String.fromCharCode(result);
    }

}

function caesar(string) {
    let workingString = string.split("")
    for (let i = 0; i < workingString.length; i++) {
        workingString[i] = workingString[i].charCodeAt(0);
        console.log(workingString[i]);
        workingString[i] = lowerCase(workingString[i]);
    }
    workingString = workingString.join("")
    console.log(workingString);

    return workingString;

}

module.exports = caesar;