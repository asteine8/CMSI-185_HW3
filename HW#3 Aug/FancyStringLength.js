
function NumOccurences(char, str) {
    if (char.length !== 1) throw "char is not single character";
    var charArray = str.split("").filter(function(el) {
        if (el === char) return true;
        else return false;
    });
    return charArray.length;
}

console.log(NumOccurences(" ", "Hello my name is Sue"));