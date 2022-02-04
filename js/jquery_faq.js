"use strict";

$(document).ready(function (){
    // $('.invisible').css('visibility', 'hidden');

    $('#show').click(function (){
        $('dd').toggleClass('invisible');
    });

    $('dt').click(function (){
        $(this).toggleClass('highlight')
    })
});