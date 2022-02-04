"use strict";

$(document).ready(function () {

    $('body').css({
        'background-image': 'url(../img/konami1.png)',
        'background-color': 'black'
    })

    let bgm = new Audio('../img/10_-_Castlevania_-_NES_-_Poison_Mind.ogg')
    bgm.volume = 0.2;

    let konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13];
    let codeSequence = 0;

    $(document).keyup(function (e) {
        console.log(e.keyCode);

        if (e.keyCode === konamiCode[codeSequence]) {
            // console.log('correct')
            if (konamiCode[codeSequence] === 13) {
                alert('You have added 30 lives!')
                $('body').css({
                    'background-image': 'url(../img/konami2.png)',
                    'background-repeat': 'no-repeat',
                    'background-size': 'cover'
                });
                bgm.play();
                codeSequence = 0
                return;
            }
            codeSequence++
        } else {
            // console.log('wrong')
            codeSequence = 0
        }
    })

})