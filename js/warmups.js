"use strict";
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
// let count = 1;
// let limit = 50;
// let n = 1;
// while (count <= limit) {
//     trialDivision(n);
//         if (trialDivision(n).length === 1) {
//             console.log(n + " is prime number " + count + ".");
//             n++;
//             count++;
//         } else {
//             n++;
//         }
// }
//
// //https://www.blogcyberini.com/2018/04/algoritmo-fatoracao-de-numeros-inteiros-divisao-por-tentativa.html
// //GitHub: HenriqueIni
//
// // Trial Division factorization algorithm
// // Returns a list of prime factors of n
// function trialDivision(n){
//     // Factors are stored in an array
//     var factors = [];
//
//     // Check if 2 is a factor
//     while(n % 2 === 0){
//         factors.push(2);
//         n = n / 2;
//     }
//
//     // Now check for possible odd factors
//     // Only odd ones are possible
//     var d = 3; // Possible factors
//     var d2 = 9; // d2 = d * d
//     while(d2 <= n){
//         // If d is a factor, do the division and store the factor
//         if(n % d === 0){
//             factors.push(d);
//             n = n / d;
//         }else{
//             // If d is not a factor, check the next
//             d = d + 2;
//             d2 = d * d; // d2 = d*d
//         }
//     }
//     // This condition is needed when n is prime
//     if(n > 1){
//         factors.push(n);
//     }
//     return factors;
// }

// 1/3 add, square, sumOfSquares
// function add(num1, num2) {
//     return num1 + num2;
// }
//
// function square(numToSqr) {
//     return numToSqr * numToSqr;
// }
//
// function sumOfSquares(a, b) {
//     a = square(a);
//     b = square(b);
//     return add(a, b);
// }
//
// console.log(sumOfSquares(5, 10));

// function getFizzBuzz(startingNum) {
//     if ((startingNum % 3 === 0) && (startingNum % 5 === 0)) {
//         return "FIZZ BUZZ";
//     } else if (startingNum % 3 === 0) {
//         console.log("Fizz");
//         return startingNum;
//     } else if (startingNum % 5 === 0) {
//         console.log("Buzz");
//         return startingNum;
//     } else {
//         return startingNum + " was neither Fizz, nor Buzz.";
//     }
// }
//
// console.log(getFizzBuzz(2));

// function getPassword() {
//     let password = "password123"
//     let input = prompt("Please enter password")
//     while (input !== password) {
//         input = prompt("Please try again");
//     }
//     alert("Your password was correct!")
// }
//
// getPassword();

// function getMeaningOfLife(meaningfulNum) {
//     let counter = 0;
//     if (isNaN(meaningfulNum)) {
//         console.log(meaningfulNum + " was not so meaningful.")
//     } else if (meaningfulNum == Infinity) {
//         console.log(meaningfulNum + " was too big.")
//     } else if (meaningfulNum < 0) {
//         console.log(meaningfulNum + " was too small.")
//     } else {
//         meaningfulNum = Number(meaningfulNum);
//         while (counter !== meaningfulNum) {
//             counter++;
//         }
//         console.log("The meaning of life, the universe, and everything is " + meaningfulNum)
//     }
//     if (meaningfulNum === 42) {
//         console.log("Did you bring your towel?")
//     }
// }
//
// getMeaningOfLife(42);

// 1/4
// TODO: MINI EXERCISE
//      Write a function which uses a for-loop and
//      -> accepts the number of times to iterate as a parameter
//      -> only logs *if the iteration number is odd*

// function oddLoop(iterations) {
//     for (let i = 1; i <= iterations; i++) {
//         if (i % 2 !== 0) {
//             console.log("This is iteration number " + i)
//         }
//     }
// }
//
// oddLoop(12);

// TODO: MINI EXERCISE
//      Write a function which uses a for-loop and
//      -> accepts the number of times to iterate as a parameter
//      -> logs "This is an even iteration" on the evens
//      -> logs "This is an odd iteration" on the odds

// function evenLoop(iterations) {
//     for (let i = 1; i <= iterations; i++) {
//         if (i % 2 === 0) {
//             console.log(i + ": This is an even iteration")
//         } else {
//             console.log(i + ": This is an odd iteration")
//         }
//     }
// }
//
// evenLoop(20);

// TODO: MINI EXERCISE
//      Make a new version of your getPassword function using a for-loop!
//      -> The purpose of the for-loop is to only allow a maximum number of attempts
//          -> If the max attempt used unsuccessfully, alert the user of such and RETURN or BREAK
//      -> Once the user enters the correct password, use the 'break' keyword to end the loop
//      -> After the loop concludes, alert the use they have entered the correct password
//
// function getPasswordLoop(maxAttempts) {
//     let password = "password123";
//     let input = "";
//     for (let i = 1; i <= maxAttempts ; i++) {
//         input = prompt("Please enter password");
//         if (input === password) {
//             break;
//         } else {
//             alert("Incorrect password, " + (maxAttempts - i) + " attempts remaining.");
//         }
//         if (i === maxAttempts) {
//             alert("Maximum attempts reached");
//             return;
//         }
//     }
//     alert("Correct password");
// }
//
// getPasswordLoop(3);

// -Create an array with five strings representing your favorite artists (music or otherwise) and store it in a variable called favoriteArtists
// -Write a function that accepts an array as a parameter and...
// -> logs the first, third, and last elements of that array
// -Invoke your function and pass favoriteArtists as an argument

// let favoriteArtists = ["kanye", "eminem", "chester", "pendulum", "a&b"]
// function takeArray(input) {
//     console.log(input[0])
//     console.log(input[2])
//     console.log(input[4])
// }
//
// takeArray(favoriteArtists);

// 1/6
// Declare an array of two objects for movies
//     that have the following member values:
//     title (string)
// year released (int)
// rating (string)
// director (string)
// imdb rating (decimal)
// academy award win (boolean)
// Use imdb.com to look up the info or make up your own info
// write a printMovie function that takes a movie as a parameter and prints its info.
//     call it with each of your array elements.
//     write a printMovies function that takes an array as a parameter, iterates over the array, and calls printMovie on each of the array elements

// let movies = [];
//
// movies[0] = {
//     title: "Good Will Hunting",
//     year: 1997,
//     rating: "R",
//     director: {firstName: "Gus", lastName: "Van Sant"},
//     imdb_rating: 8.3,
//     academy_award_win: true,
//     genres: ["Drama", "Romance"]
// }
//
// movies[1] = {
//     title: "Saving Private Ryan",
//     year: 1998,
//     rating: "R",
//     director: {firstName: "Steven", lastName: "Spielberg"},
//     imdb_rating: 8.6,
//     academy_award_win: true,
//     genres: ["Drama", "War"]
// }
//
// function printMovie(movie) {
//     return movies[movie]
// }

// console.log(printMovie(0));
// console.log(printMovie(1));

// function printMovies(array) {
//     for (let i = 0; i < array.length; i++) {
//         console.log(printMovie(i));
//     }
// }

// printMovies(movies);

// movies[0].rate = function (rating) {
//     this.myRating = rating;
// }
//
// movies[0].rate(9.5);
//
// movies[1].rate = function (rating) {
//     this.myRating = rating;
// }
//
// movies[1].rate(8.7);
//
// printMovies(movies);

// 1/13
// function arrayToString(myArray) {
//     let myString = ""
//     for (let i = 0; i < myArray.length; i++) {
//         myString += myArray[i] + " "
//     }
//     return myString;
// }
//
// let anArray = ["this", "is", "an", "array", "?"]
// console.log(arrayToString(anArray));

// 1/14
// function removeAll(array, value) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === value) {
//             array.splice(i, 1)
//             i -= 1
//         }
//     }
//     return array;
// }
//
// var bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];
// console.log(removeAll(bugs, "ant"))
// console.log(removeAll(bugs, "mosquito"))
// console.log(removeAll(bugs, "roach"))

// 1/19
function getNthCat(cats, n) {
    return cats[n]
}

var myCats = [
    {
        catName: "Fifi",
        age: 5
    },
    {
        catName: "Fluffy",
        age: 3
    },
    {
        catName: "Abby",
        age: 7
    }
];

// print out the cat at index 1
console.log(getNthCat(myCats, 1));