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
let counter = 0;
let limit = 25;
while (counter < limit) {
    if (counter % 2 === 0) {
        console.log(counter + " is an even number.")
    }
    counter += 1
}