// Set Up Global Array and Initialize Primes
const PRIMES = Array(999999).fill(false);
(function initPrimes(num) {
    const upper = Math.floor((num-1)/2);
    const isPrime = Array(upper).fill(true);
    const sqrtUpper = Math.floor((Math.sqrt(num)-1)/2);
    for (let i=0;i<=sqrtUpper;i++) {
        if (isPrime[i]) {
            const prime = 2 * i + 3;
            PRIMES[prime] = true;
            const primeSquaredIndex = 2 * i ** 2 + 6 * i + 3;
            for (let j=primeSquaredIndex;j<upper;j+=prime) {
                isPrime[j] = false;
            }
        }
    }

    for (let i=sqrtUpper + 1;i<upper;i++) {
        if (isPrime[i]) PRIMES[2*i+3] = true;
    }
})(999999);

// Function to Get Number Information (including Invalid Input)
function getNumberInfo() {
    // Set Up Variable
    let txt = "";
    // Get the value of the input field
    let num = document.getElementById("mynumber").value;
    // Check if input is valid
    if (isNaN(num) || num.toString().length == 0 || num<100 || num>1000000 || !Number.isInteger(Number(num))) {
        txt += `Invalid Input.  Please enter a whole number between 100 and 1000000.`;
    } else {
        // Remove any leading zeros
        num = parseInt(num);
        txt += `You have entered the number ${num}. <p>`;
        txt += `There are ${circularPrimes(num)} circular primes below ${num}.`;
    }

    // Display the Information in the Browser
    document.getElementById("numinfo").innerHTML = txt;
}

// Function to check if the number n is a circular prime
function isCircularPrime(n) {
    const nString = n.toString();
    return nString.split("").every((_,index) => PRIMES[nString.slice(index) + nString.slice(0,index)]);
}

/* 
    Function to return the number of circular primes below n
    circularPrimes(100)     returns 13
    circularPrimes(100000)  returns 43
    circularPrimes(250000)  returns 45
    circularPrimes(500000)  returns 49
    circularPrimes(750000)  returns 49
    circularPrimes(1000000) returns 55
*/
function circularPrimes(n) {
    if (n<2) return 0;
    let count = 1;
    for (let i=3;i<n;i+=2) {
        if (isCircularPrime(i)) count++;
    }
    return count;
}