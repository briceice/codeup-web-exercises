let a = 1;
console.log(a)
let b = a++;
console.log(b)
let c = ++a;
console.log(c)

let d = "hello"
let e = false
console.log(d++)
console.log(e++) // false = 0?

let perplexed;
console.log(perplexed + 2)

let price = 2.7;
console.log(price.toFixed(2))

let price2 = "2.7";
console.log(parseFloat(price2).toFixed(2))

console.log(isNaN(0))

console.log(isNaN(true))

console.log(NaN == NaN)

console.log(isNaN(NaN))

console.log(!true)

console.log(!!false)

console.log(!!0)

console.log(!!"hello")

console.log(!!"")

console.log(!!"false")

console.log(!!"0")

let sample = "Hello Codeup";
console.log(sample.length)
console.log(sample.toUpperCase())
console.log(sample += " Students")
console.log(sample.replace("Students", "Class"))
console.log(sample.indexOf("c")) // "c" is not present, returns -1
console.log(sample.indexOf("C"))
console.log(sample.substr(6, 6)) // "c"(non existent) returns -1

let rental1 = 3
let rental2 = 5
let rental3 = 1
let rentalRate = 3
let cost = ((rental1 + rental2 + rental3) * rentalRate)
console.log(cost)

let rateGoggle = 400
let rateAmazon = 380
let rateFacebook = 350
let hoursGoogle = 6
let hoursAmazon = 4
let hoursFacebook = 10
let payment = ((rateGoggle * hoursGoogle) + (rateAmazon * hoursAmazon) + (rateFacebook * hoursFacebook))
console.log(payment)

let classFull = false
let scheduleConflict = false
let enroll = !classFull && !scheduleConflict
console.log(enroll)

let itemsBought = 3
let offerActive = true
let premium = true
let offerApplied = (premium || itemsBought > 2) && offerActive
console.log(offerApplied)

let username = "codeup";
let password = "notastrongpassword";
console.log(password.length >= 5)
console.log(password.indexOf(username) != true)
console.log(username.length <= 20)
console.log(username.trim() == username && password.trim() == password)