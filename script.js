
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

    document.getElementById('1000').value = Math.floor(remainder / 1000);
    remainder = remainder % 1000;

    document.getElementById('500').value = Math.floor(remainder / 500);
    remainder = remainder % 500;

    document.getElementById('200').value = Math.floor(remainder / 200);
    remainder = remainder % 200;

    document.getElementById('100').value = Math.floor(remainder / 100);
    remainder = remainder % 100;

    document.getElementById('50').value = Math.floor(remainder / 50);
    remainder = remainder % 50;

    document.getElementById('20').value = Math.floor(remainder / 20);
    remainder = remainder % 20;

    document.getElementById('10').value = Math.floor(remainder / 10);
    remainder = remainder % 10;

    document.getElementById('5').value = Math.floor(remainder / 5);
    remainder = remainder % 5;

    document.getElementById('2').value = Math.floor(remainder / 2);
    remainder = remainder % 2;

    document.getElementById('1').value = Math.floor(remainder / 1);
    remainder = remainder % 1;
}






