
// Converts an unsigned hex value string into a
// decimal value. Returns -1 if string is not a
// valid hex value
function ParseHex2Dec(hexString) {
    hexString = hexString.trim(); // Remove some whitespace
    let decValue = 0;
    
    for (let i = 0; i < hexString.length; i++) {
        let c = hexString.charAt(hexString.length - (i + 1));

        // Check if the character is a number
        if (-1 === "1234567890".search(c)) {
            // Character is not a number
            switch (c) {
                case "a":
                case "A":
                    decValue += 10 * (16 ** i);
                    break;
                case "b":
                case "B":
                    decValue += 11 * (16 ** i);
                    break;
                case "c":
                case "C":
                    decValue += 12 * (16 ** i);
                    break;
                case "d":
                case "D":
                    decValue += 13 * (16 ** i);
                    break;
                case "e":
                case "E":
                    decValue += 14 * (16 ** i);
                    break;
                case "f":
                case "F":
                    decValue += 15 * (16 ** i);
                    break;
                default:
                    // invalid character
                    return -1;
            }
        }
        else { // Character is a number

            // Use unary b/c its fast
            decValue += +c * (16 ** i);
        }
    }
    return decValue;
}

console.log(ParseHex2Dec("AFFFFF209ABE"));