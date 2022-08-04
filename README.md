# Project Euler 035 - Circular Primes

The number, 197, is called a circular prime because all rotations of the digits: 197, 971, and 719, are themselves prime.

There are thirteen such primes below 100: 2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, and 97.

The aim is to find the number of circular primes below `n` whereas `n` is between 100 and 1000000.

**NOTE:** Circular Primes individual rotation can exceed `n`.

Information at [Project Euler 035](https://projecteuler.net/problem=35)

## UX

**Getting Started**

Enter a whole number between 100 and 1000000 and click on the Submit Button.  You will see the number entered as well as the number of circular primes below that number, unless you have made an invalid input.  For example, if you entered 100, you would expect 13 circular primes below 100.  Click on the Reset Button to clear the information or to start again.


**User Stories**

As a user, I expect to get an error message, if I do any of:

- Not enter anything in the input field
- Entering text other than a number
- Entering a number less than 100 or greater than 1000000
- Entering a number that is not an integer

As a user, I expect the function `circularPrimes(100)` to return a number.

As a user, I expect the function `circularPrimes(100)` to return 13.

As a user, I expect the function `circularPrimes(100000)` to return 43.

As a user, I expect the function `circularPrimes(250000)` to return 45.

As a user, I expect the function `circularPrimes(500000)` to return 49.

As a user, I expect the function `circularPrimes(750000)` to return 49.

As a user, I expect the function `circularPrimes(1000000)` to return 55.

**Information Architecture**

The function `circularPrimes(n)` returns a number, where `n` is a number between 100 and 1000000.

## Features

Allows the user to enter the number (limit) as well as getting the number of circular primes below that number.  Performs checks on valid user input.  If the input is not valid, an error message is displayed.

## Technologies

Uses HTML5, CSS3, JavaScript, Bootstrap 5.2.0 and Google Fonts.

## Testing

Ensure all user stories have been met.

## Deployment

Deployed on [GitHub Pages](https://derektypist.github.io/project-euler-035) at the main branch.

## Credits

### Content

Written by me.

### Acknowledgements

- [Project Euler](https://projecteuler.net)
- [FreeCodeCamp](https://www.freecodecamp.org)
