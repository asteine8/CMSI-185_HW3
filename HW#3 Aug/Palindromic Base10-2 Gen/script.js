
function GetPalindromesLessThan(num) {
    let validPals = [];


    let MaxBits = Math.ceil(Math.log(num + 1)/Math.log(2)); // Calculate number of bits required for this calculation

    for (let NumBits = 1; NumBits < (MaxBits+1); NumBits++) {

        let NumPossiblePals = 2 ** Math.ceil((NumBits-2)/2); // Number of possible palindromes
        let baseNum = (NumBits>1) ? 2**(NumBits-1) + 1 : 1;  // Initial bit number looks like 100...001

        for (let n = 0; n < NumPossiblePals; n++) {
            let possiblePal;
            if (NumBits > 2) {
                let reverseN = new Array(NumBits- 1 - n.toString(2).length).join("0").split("").concat(n.toString(2).split("")).reverse().join("");
                possiblePal = baseNum | (parseInt(reverseN, 2) << 1) | (n << 1);
            }
            else {
                possiblePal = baseNum;
            }

            let palValid = true;
            let possiblePalString = possiblePal.toString();

            for (let i=0;i<Math.floor(possiblePalString.length/2);i++) { if(possiblePalString.charAt(i)!==possiblePalString.charAt(possiblePalString.length-i-1)) palValid=false; }
            if (palValid&&possiblePal<num&&possiblePal!==2) validPals.push(possiblePal); // Set possible pal as valid
        }
    }
    return validPals;
}

alert("Valid Pals less than 10000: [" + GetPalindromesLessThan(10000).join(",") + "]");
