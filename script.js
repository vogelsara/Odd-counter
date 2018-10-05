


function calculateTheOdd () {
    var payed = parseInt(document.getElementById('payed').value);
    var price = parseInt(document.getElementById('price').value);
    var odd = payed - price;

    document.getElementById('result').value = odd;
}


