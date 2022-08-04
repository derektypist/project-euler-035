# Project Euler 035 - Circular Primes

The number, 197, is called a circular prime because all rotations of the digits: 197, 971, and 719, are themselves prime.

There are thirteen such primes below 100: 2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, and 97.

The aim is to find the number of circular primes below `n` whereas `n` is between 100 and 1000000.

**NOTE:** Circular Primes individual rotation can exceed `n`.

Information at [Project Euler 035](https://projecteuler.net/problem=35)

## UX

**User Stories**

As a user, I expect the function `circularPrimes(100)` to return a number.

As a user, I expect the function `circularPrimes(100)` to return 13.

As a user, I expect the function `circularPrimes(100000)` to return 43.

As a user, I expect the function `circularPrimes(250000)` to return 45.

As a user, I expect the function `circularPrimes(500000)` to return 49.

As a user, I expect the function `circularPrimes(750000)` to return 49.

As a user, I expect the function `circularPrimes(1000000)` to return 55.

**Information Architecture**

The function `circularPrimes(n)` returns a number, where `n` is a number between 100 and 1000000.

