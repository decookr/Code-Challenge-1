console.log('JS');

$(document).ready(readyNow);
function readyNow(){
$("#generateButton").on('click', appendDiv);
$('#swapColor').toggleClass('active');
$('body').on('click', '.deleteDiv', removeDiv);
$('body').on('click', '.swapColor', swapColor);


}//end doc ready

var clicks = 0;

function appendDiv(){
    clicks += 1;
    console.log('clicked');
    $('#target').append('<div class="addedDiv"><p>' + clicks + '</p ><button class="swapColor">Swap</button><button class="deleteDiv">Delete</button></div>');
    
    
}//appendDiv function

function swapColor(){
    $(this).parent().toggleClass('active');
    console.log('yellow click');
    
}//end swapColor

function removeDiv(){
    $(this).parent().remove();
}