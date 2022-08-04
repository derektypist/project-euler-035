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