"use strict";
function showMultiplicationTable(numToMultiply) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${numToMultiply} x ${i} = ${numToMultiply * i}`)
    }
}

// showMultiplicationTable(7);

function rngOddEven() {
    let num = 0
    for (let i = 1; i <= 10 ; i++) {
        num = Math.floor(Math.random() * 180) + 20;
        if (num % 2 === 0) {
            console.log(`${num} is even`)
        } else {
            console.log(`${num} is odd`)
        }
    }
}

// rngOddEven();

function count() {
    for (let i = 1; i <= 9; i++) {
        console.log(`${i}`.repeat(i))
    }
}

// count();

function byFive() {
    for (let i = 0; i < 20; i++) {
        console.log(100 - (5 * i))
    }
}

// byFive();