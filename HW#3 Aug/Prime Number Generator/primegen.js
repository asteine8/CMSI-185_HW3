
function ArraySum(arr) {
    let accumulator = 0;
    for (i in arr) {accumulator+=arr[i];}
    return accumulator;
}

function IsPrime(num) {
    if (num < 4) return true; // Just filter them out
    else if (num%2===0) return false; // Even, cannot be prime at this point
    else if (num%5===0) return false; // Divisable by 5, cannot be prime at this point
    for (let n = 3; n <= (num/3); n+=2) {if (num%n===0) return false;} // Dividable by odd numbers

    return true;
}

function FindNPrimes(num) {
    let primes = [2,3,5,7,11,13,17,19,23,27,31,37,41,43,47];
    if (num > primes.length) { // Extend primes list
        let tempVar = primes[primes.length-1] + 2;
        while (num > primes.length) {
            if (IsPrime(tempVar)) primes.push(tempVar);
            tempVar+=2;
        }
        return primes;
    }
    else { // We already know this, don't waste computational time
        return primes.slice(0,num);
    }
}

let primez = new Array(32); // Predeclare 4 speed

let t0 = performance.now();
primez = FindNPrimes(32);
let t1 = performance.now();


console.log("Primes: " + primez);
console.log("Prime Sum = " + ArraySum(primez));
console.log("Calculation took " + Math.floor(t1-t0) + " ms");