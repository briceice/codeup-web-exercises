"use strict";
function odds() {
    do {
        var input = prompt("Please enter an odd number between 1 and 50")
        input = parseInt(input);
    } while (input < 1 || input > 50 || input % 2 === 0)

    for (let i = 1; i <= 50; i++) {
        if (i === input) {
            console.log(`Yikes! Skipping number: ${i}`)
            continue;
        }
        if (i % 2 === 1) {
            console.log(`Here is an odd number: ${i}`)
        }
    }
}

odds();