
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
    var denominationArray = [1000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
    var denominationArrayLength = denominationArray.length;

    for (var i = 0; i < denominationArrayLength; i++) {
        denomination = denominationArray[i];
        document.getElementById(denomination).value = Math.floor(remainder / denomination);
        remainder = remainder % denomination;
    }
}






