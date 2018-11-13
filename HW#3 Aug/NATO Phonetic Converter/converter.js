
let NATOConversion = {
    A:"ALFA",
    B:"BRAVO",
    C:"CHARLIE",
    D:"DELTA",
    E:"ECHO",
    F:"FOXTROT",
    G:"GOLF",
    H:"HOTEL",
    I:"INDIA",
    J:"JULIETT",
    K:"KILO",
    L:"LIMA",
    M:"MIKE",
    N:"NOVEMBER",
    O:"OSCAR",
    P:"PAPA",
    Q:"QUEBEC",
    R:"ROMEO",
    S:"SIERRA",
    T:"TANGO",
    U:"UNIFORM",
    V:"VICTOR",
    W:"WISKEY",
    X:"XRAY",
    Y:"YANKEE",
    Z:"ZULU",
    "1":"ONE",
    "2":"TWO",
    "3":"THREE",
    "4":"FOUR",
    "5":"FIVE",
    "6":"SIX",
    "7":"SEVEN",
    "8":"EIGHT",
    "9":"NINE",
    "0":"ZERO"
};

function ConvertString2NATOArray(str) {
    str = str.trim(); // Remove whitespace

    let NATOArray = [""];

    for (let i = 0; i < str.length; i ++) {
        if (str.charAt(i).search(/\W/) !== -1) {
            NATOArray[i] = str.charAt(i); // Bring over non-alphanumeric characters
        }
        else {
            NATOArray[i] = "";
            NATOArray[i] += NATOConversion[str.charAt(i).toUpperCase()];
        }
    }
    return NATOArray;
}

function EnterClicked() {
    let myEvent = new Event("click");
    myEvent.keyCode = 13;
    TextBoxKeyPressed(myEvent);

    // alert("You sly fox");
}

function TextBoxKeyPressed(event) {
    if (event.keyCode === 13) { // Enter pressed, run conversion
        InputBox = document.getElementById("WordInputBox");
        OutputEl = document.getElementById("Output");

        let NATOArray = ConvertString2NATOArray(InputBox.value);

        let outStr = "";
        for (i in NATOArray) {
            outStr += " " + NATOArray[i];
            outStr += "<br>";
        }

        OutputEl.innerHTML = outStr;
    }
}