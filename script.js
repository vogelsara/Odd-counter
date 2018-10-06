
var payed;
var price;
var odd;

function calculateTheOdd () {
    payed = document.getElementById('payed').value;
    price = document.getElementById('price').value;
    odd = payed - price;

    document.getElementById('result').value = odd;
}



//Denomination counter

function countDenomination () {

    var remainder = odd;
    var denomination;

    denomination = 1000;
    document.getElementById(denomination).value = Math.floor(remainder / denomination);
    remainder = remainder % denomination;

    denomination = 500;
    document.getElementById(denomination).value = Math.floor(remainder / denomination);
    remainder = remainder % denomination;

    denomination = 200;
    document.getElementById(denomination).value = Math.floor(remainder / denomination);
    remainder = remainder % denomination;

    denomination = 100;
    document.getElementById(denomination).value = Math.floor(remainder / denomination);
    remainder = remainder % denomination;

    denomination = 50;
    document.getElementById(denomination).value = Math.floor(remainder / denomination);
    remainder = remainder % denomination;

    denomination = 20;
    document.getElementById(denomination).value = Math.floor(remainder / denomination);
    remainder = remainder % denomination;

    denomination = 10;
    document.getElementById(denomination).value = Math.floor(remainder / denomination);
    remainder = remainder % denomination;

    denomination = 5;
    document.getElementById(denomination).value = Math.floor(remainder / denomination);
    remainder = remainder % denomination;

    denomination = 2;
    document.getElementById(denomination).value = Math.floor(remainder / denomination);
    remainder = remainder % denomination;

    denomination = 1;
    document.getElementById(denomination).value = Math.floor(remainder / denomination);
    remainder = remainder % denomination;
}






