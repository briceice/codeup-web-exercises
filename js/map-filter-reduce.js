const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

let threeLanguages = users.filter(function(user){
    return user.languages.length >= 3
})
console.log(threeLanguages);

let emails = users.map(function(user){
    return user.email
})
console.log(emails)

let yearsExperience = users.reduce(function(sum, user){
    return sum + user.yearsOfExperience
}, 0);
let avgExperience = yearsExperience / users.length
console.log(`average years of experience: ${avgExperience}`)

let longestEmail = users.reduce(function (maxEmail, user){
    if (user.email.length > maxEmail.length) {
        return user.email
    } else {
        return maxEmail
    }
}, "")
console.log(longestEmail);

let names = users.reduce(function (names, user){
    if(user.id === users[users.length - 1].id) {
        return `${names} ${user.name}.`
    }
    return `${names} ${user.name},`
}, "Your instructors are:")
console.log(names)

let reducedLanguages = users.reduce(function(languages, user){
    for (let i = 0; i < user.languages.length; i++) {
        if (!(languages.includes(user.languages[i]))) {
            languages.push(`${user.languages[i]}`)
        }
    }
    return languages
},[])
console.log(reducedLanguages)