// 12/10
let creditScore = 720;
let cashOnHand = 5000;
let loanApproved = (creditScore > 680 && cashOnHand >= 4000) || cashOnHand >= 10000
if (loanApproved){
    console.log("Your loan has been approved!")
} else {
    console.log("Your loan has not been approved, sorry.")
}

// 12/13 Declare a function called 'isFive' that takes in an input and returns true if that input is the number five. Otherwise it should return false.
function isFive(x) {
    return x === 5;
}
console.log(isFive(4))
console.log(isFive(5))
console.log(isFive("5"))