"use strict";

function getLastCommit(username) {
    return fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': `token ${PROMISES_GIT_TOKEN}`}})
        .then((response) => {
            return response.json();
        })
        .then((jsonData) => {
            let userRepo = jsonData[0].repo.name
            return fetch(`https://api.github.com/repos/${userRepo}/commits/main`, {headers: {'Authorization': `token ${PROMISES_GIT_TOKEN}`}})
                .then((response) => {
                    return response.json();
                })
                .then((jsonData) => {
                    let lastCommit = jsonData.commit.author.date
                    return lastCommit
                })
                .catch((error) => {
                    console.log(error)
                })
        })
        .catch((error) => {
            console.log(error)
        })
}

getLastCommit('briceice').then(lastCommitDate => console.log(lastCommitDate))

function wait(timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(timeout);
        }, timeout);
    });
}

wait(1000).then((ms) => console.log(`You'll see this after ${ms/1000} second`));
wait(3000).then((ms) => console.log(`You'll see this after ${ms/1000} seconds`));