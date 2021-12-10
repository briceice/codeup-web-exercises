"use strict";
console.log("Hello from external JavaScript")

alert("Welcome to my Website!")

let userInput = prompt("What is your favorite color?")
alert("Great, " + userInput + " is my favorite color too!")

let rental1 = prompt("How many days did you rent the little mermaid?")
let rental2 = prompt("How many days did you rent Brother Bear?")
let rental3 = prompt("How many days did you rent Hercules?")
let rentalRate = 3
let cost = ((parseInt(rental1) + parseInt(rental2) + parseInt(rental3)) * rentalRate)
alert("That will cost $ " + cost)

let rateGoggle = 400
let rateAmazon = 380
let rateFacebook = 350
let hoursGoogle = prompt("How many hours did you work at Google?")
let hoursAmazon = prompt("How many hours did you work at Amazon?")
let hoursFacebook = prompt("How many hours did you work at Facebook?")
let payment = ((rateGoggle * parseInt(hoursGoogle)) + (rateAmazon * parseInt(hoursAmazon)) + (rateFacebook * parseInt(hoursFacebook)))
alert("You have earned $ " + payment)

let classFull = confirm("Is the class full?")
let scheduleConflict = confirm("Does the class conflict with your schedule?")
let canEnroll = !classFull && !scheduleConflict
if (canEnroll){
    alert("Your enrollment has been accepted.")
} else {
    alert("Sorry, you cannot enroll at this time.")
}

let itemsBought = prompt("How many items have you bought?")
let offerActive = confirm("Is the offer still available?")
let premium = confirm("Are you a premium member?")
let offerApplied = (premium || parseInt(itemsBought) > 2) && offerActive
if (offerApplied) {
    alert("You are eligible for our special offer!")
} else {
    alert("I'm sorry, you are not eligible for the offer.")
}