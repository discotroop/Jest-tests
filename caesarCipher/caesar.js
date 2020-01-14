function selectCase(charCode) {
    if (charCode > 96 && charCode < 123) {
        return lowerCase(charCode);
    } else if (charCode > 64 && charCode < 91) {
        return upperCase(charCode);
    } else {
        // handles punctuation etc. 
        return String.fromCharCode(charCode);
    }
}

function lowerCase(charCode) {
    if (charCode >= 110) {
        result = charCode - 122 + 109;
        return String.fromCharCode(result);
    } else {
        result = charCode + 13;
        return String.fromCharCode(result);
    }
}

function upperCase(charCode) {
    if (charCode >= 78) {
        result = charCode - 90 + 77;
        return String.fromCharCode(result);
    } else {
        result = charCode + 13;
        return String.fromCharCode(result);
    }
}

function caesar(string) {
    let workingString = string.split("")
    for (let i = 0; i < workingString.length; i++) {
        workingString[i] = workingString[i].charCodeAt(0);
        workingString[i] = selectCase(workingString[i]);
    }
    workingString = workingString.join("")

    return workingString;

}

module.exports = caesar;