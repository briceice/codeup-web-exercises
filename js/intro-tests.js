"use strict";
(function () {

    function count(input){
        if (typeof input === "string") {
            return input.length
        } else {
            return false
        }

    }

    // console.log(count());

    function countTest(){

        // Returns accurate count of string length
        let actualValue = count("Hello")
        let expectedValue = 5
        console.log("Expect the return count to be accurate: " + (actualValue === expectedValue))

        // Returns false if argument isn't a string
        actualValue = count(null)
        expectedValue = false
        console.log("Expect to return false when the argument passed is not a string: " + (actualValue === expectedValue))

    }

    countTest();
})();