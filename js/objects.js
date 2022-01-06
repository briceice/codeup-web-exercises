(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    let person = {
        firstName : "Brice",
        lastName : "Ernst"
    };

    // console.log(person.firstName);
    // console.log(person.lastName);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    person.sayHello = function() {
        return "Hello from " + this.firstName + " " + this.lastName
    }

    // console.log(person.sayHello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    function checkDiscount() {
        for (let i = 0; i < shoppers.length; i++) {
            console.log("Hello shopper: " + shoppers[i].name);
            console.log("Your total before discount: " + shoppers[i].amount);
            if (shoppers[i].amount > 200) {
                var discount = shoppers[i].amount * .12
                console.log("Your are eligible for a discount of: " + discount);
                console.log("Your new total come out to: " + (shoppers[i].amount - discount));
            } else {
                console.log("You are not eligible for the discount, see above for total.")
            }
        }
    }

    // checkDiscount();

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    let books = [];

    // books[0] = {
    //     title : "Nineteen Eighty-Four",
    //     author : {firstName: "George", lastName: "Orwell"}
    // }
    // books[1] = {
    //     title : "The Hobbit",
    //     author : {firstName: "John", lastName: "Tolkien"}
    // }
    // books[2] = {
    //     title : "The Outsiders",
    //     author : {firstName: "Susan", lastName: "Hinton"}
    // }
    // books[3] = {
    //     title : "Sword of Destiny",
    //     author : {firstName: "Andrzej", lastName: "Sapkowski"}
    // }
    // books[4] = {
    //     title : "Dune",
    //     author : {firstName: "Frank", lastName: "Herbert"}
    // }

    // console.log(books[0].title);
    // console.log(books[0].author.firstName);
    // console.log(books[0].author.lastName);

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    function loopBooks() {
        for (let i = 0; i < books.length; i++) {
            // console.log("Book # " + (i + 1))
            // console.log("Title: " + books[i].title)
            // console.log("Author: " + books[i].author.firstName + " " + books[i].author.lastName)
            // console.log("---")
            showBookInfo(i);
        }
    }

    // loopBooks();

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    function createBook(title, authorFirstName, authorLastName) {
        books.push( {
            title : title,
            author : {firstName: authorFirstName, lastName: authorLastName}
        })
    }

    createBook("Nineteen Eight-Four", "George", "Orwell");
    createBook("The Hobbit", "John", "Tolkien");
    createBook("The Outsiders", "Susan", "Hinton");
    createBook("Sword of Destiny", "Andrzej", "Sapkowski");
    createBook("Dune", "Frank", "Herbert");

    function showBookInfo(book) {
        console.log("Book # " + (book + 1))
        console.log("Title: " + books[book].title)
        console.log("Author: " + books[book].author.firstName + " " + books[book].author.lastName)
        console.log("---")
    }

    // showBookInfo(0);
    // loopBooks();

})();