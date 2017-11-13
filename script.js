console.log('JS');

$(document).ready(readyNow);
function readyNow(){
$("#generateButton").on('click', appendDiv);
$('#swapColor').toggleClass('active');
$('#deleteDiv').on('click', removeDiv);

}//end doc ready

var clicks = 0;

function appendDiv(){
    clicks += 1;
    console.log('clicked');
    $('div').append('<p>' + clicks + '</p id="appendedDiv"><button id="swapColor">Swap</button><button id="deleteDiv">Delete</button>');
    $("#swapColor").on('click', swapColor);
    
    
}//appendDiv function

function swapColor(){
    $(this).closest ('div:parent').css('background-color', 'yellow');
    console.log('yellow click');
    
}//end swapColor

function removeDiv(){
    $(this).closest ('div').remove;
}