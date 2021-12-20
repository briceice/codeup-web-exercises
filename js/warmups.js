// // 12/10
// let creditScore = 720;
// let cashOnHand = 5000;
// let loanApproved = (creditScore > 680 && cashOnHand >= 4000) || cashOnHand >= 10000
// if (loanApproved){
//     console.log("Your loan has been approved!")
// } else {
//     console.log("Your loan has not been approved, sorry.")
// }
//
// // 12/13 Declare a function called 'isFive' that takes in an input and returns true if that input is the number five. Otherwise it should return false.
// function isFive(x) {
//     return x === 5;
// }
// console.log(isFive(4))
// console.log(isFive(5))
// console.log(isFive("5"))
//
// // 12/14 Make a function named isMultipleOfThree that takes in an input and returns a boolean indicating whether or not the input is a multiple of three.
// function isMultipleOfThree(x) {
//     return x % 3 === 0
// }
//
// console.log(isMultipleOfThree(6))
// console.log(isMultipleOfThree(-3))
//
// 12/16
// // TODO: MINI EXERCISE
// // TODO: print all even numbers between 0 and 25;
// let counter = 0; // starting point
// let counter = 0;
// let limit = 25;
// while (counter < limit) {
//     if (counter % 2 === 0) {
//         console.log(counter + " is an even number.")
//     }
//     counter += 1
// }
//
// 12/20
// Write the code necessary to output the first 50 prime numbers
// Recommend starting your loop at 1 and ending your loop once you've calculated 50 prime numbers.
// https://en.wikipedia.org/wiki/Prime_number
let count = 1;
let limit = 50;
let n = 1;
while (count <= limit) {
    trialDivision(n);
        if (trialDivision(n).length === 1) {
            console.log(n + " is prime number " + count + ".");
            n++;
            count++;
        } else {
            n++;
        }
}

//https://www.blogcyberini.com/2018/04/algoritmo-fatoracao-de-numeros-inteiros-divisao-por-tentativa.html
//GitHub: HenriqueIni

// Trial Division factorization algorithm
// Returns a list of prime factors of n
function trialDivision(n){
    // Factors are stored in an array
    var factors = [];

    // Check if 2 is a factor
    while(n % 2 === 0){
        factors.push(2);
        n = n / 2;
    }

    // Now check for possible odd factors
    // Only odd ones are possible
    var d = 3; // Possible factors
    var d2 = 9; // d2 = d * d
    while(d2 <= n){
        // If d is a factor, do the division and store the factor
        if(n % d === 0){
            factors.push(d);
            n = n / d;
        }else{
            // If d is not a factor, check the next
            d = d + 2;
            d2 = d * d; // d2 = d*d
        }
    }
    // This condition is needed when n is prime
    if(n > 1){
        factors.push(n);
    }
    return factors;
}