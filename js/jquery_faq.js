"use strict";

$(document).ready(function (){
    // $('.invisible').css('visibility', 'hidden');

    $('#show').click(function (){
        $('dd').toggleClass('invisible');
    });

    $('dt').click(function (){
        $(this).toggleClass('highlight')
    })

    $('#highlight-li').click(function (e) {
        $('ul').each(function () {
            $(this).children().last().toggleClass('highlight');
        })
    })

    $('h3').click(function (e){
        $(this).next().children().css('font-weight', 'bold')
    })

    $('li').click(function (e){
        $(this).parent().children().first().css('color', 'blue')
    })
});