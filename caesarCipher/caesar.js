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

function lowerCase(charCode) {
    if (charCode > 110) {
        charCode = charCode - 122 + 97;
        return String.fromCharCode(charCode);
    } else {
        charCode = charCode + 13;
        return String.fromCharCode(charCode);
    }

}

function caesar(string) {
    let stringArr = string.split("")
    stringArr.forEach(function(string) {
        string = string.charCodeAt(0);
    })
    stringArr.forEach(function(string) {
        if (string > 96 && string < 123) {
            string = lowerCase(string)
        }
    })
    return stringArr.join("");

}

module.exports = caesar;