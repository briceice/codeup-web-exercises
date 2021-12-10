// 12/10
let creditScore = 720;
let cashOnHand = 5000;
let loanApproved = (creditScore > 680 && cashOnHand >= 4000) || cashOnHand >= 10000
if (loanApproved){
    console.log("Your loan has been approved!")
} else {
    console.log("Your loan has not been approved, sorry.")
}