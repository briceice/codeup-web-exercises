"use strict";

// function double() {
//     let x = 2
//     while (x < 65537) {
//         console.log(x);
//         x *= 2
//     }
// }
//
// double();

// This is how you get a random number between 50 and 100
// var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
// Math.floor(Math.random() * 5) + 1;

var allCones = Math.floor(Math.random() * 50) + 50;

console.log("You need to sell " + allCones + " cones  total.");

do {
    var saleCones = Math.floor(Math.random() * 5) + 1;
    if ((allCones - saleCones) >= 0) {
        console.log(saleCones + " cones sold...")
        allCones -= saleCones
    } else {
        console.log("I cannot sell you " + saleCones + " cones, I only have " + allCones + " left.")
    }
    // console.log(allCones + " left to sell..")
} while (allCones > 0)

console.log("Yay! I sold them all.")