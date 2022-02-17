"use strict";



fetch('https://api.github.com/user', {headers: {'Authorization': `token ${PROMISES_GIT_TOKEN}`}})
    .then((response) => {
        return response.json();
    })
    .then((jsonData) => {
        console.log(jsonData)
    })
    .catch((error) => {
        console.log(error)})

fetch('https://api.github.com/users/briceice/repos', {headers: {'Authorization': `token ${PROMISES_GIT_TOKEN}`}})
    .then((response) => {
        return response.json();
    })
    .then((jsonData) => {
        console.log(jsonData)
        console.log(jsonData[0].pushed_at)
    })
    .catch((error) => {
        console.log(error)})

fetch('https://api.github.com/repos/briceice/codeup-web-exercises/commits/main', {headers: {'Authorization': `token ${PROMISES_GIT_TOKEN}`}})
    .then((response) => {
        return response.json();
    })
    .then((jsonData) => {
        console.log(jsonData)
        console.log(jsonData.commit.author.date)
    })
    .catch((error) => {
        console.log(error)})
