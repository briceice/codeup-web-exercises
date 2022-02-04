"use strict";

$(document).ready(function() {
    // alert( 'The DOM has finished loading!' );

    // var contents = $("#extra").html();
    // alert(contents);

    // $(".codeup").css('border', '1px solid red')

    // $('li').css('font-size', '20px');
    // $('h1, p, li').css('background-color', 'yellow')
    // var headerContents = $('h1').html();
    // alert(headerContents);

    $('h1').click(function (e){
        $(this).css('background-color', 'red')
    })

    $('p').dblclick(function (e){
        $(this).css('font-size', '18px')
    })

    $('li').hover(
        function (){
            $(this).css('color', 'red')
        },
        function () {
            $(this).css('color', 'black')
        }
    )

});