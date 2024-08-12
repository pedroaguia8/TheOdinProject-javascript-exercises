const repeatString = function(string, num) {
    if(num === 0)
        return "";
    if(num < 0)
        return "ERROR";

    let repeatedString = string;

    // i = 1 because if num is 1, the string should
    // stay the same
    for (let i = 1; i < num; i++) {
        repeatedString = repeatedString + string;
    
    }

    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
