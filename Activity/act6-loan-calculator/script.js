let amount = document.getElementById('amount').value;
let interest_rate = document.getElementById('interest_rate').value;
let years = document.getElementById('years').value;
let form = document.getElementById('form');
let calculate = document.getElementById('calculate');

function computeLoan(){
    let amount = document.getElementById('amount').value;
    let interest_rate = document.getElementById('interest_rate').value;
    let years = document.getElementById('years').value;
    let interest = (amount * (interest_rate * .01)) / years;
    let payment = ((amount/years) + interest).toFixed(2);
    payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
    document.getElementById('payment').innerHTML = `Monthly Payment: $${payment}`;
}

form.addEventListener('submit', function(e){
    e.preventDefault();
});