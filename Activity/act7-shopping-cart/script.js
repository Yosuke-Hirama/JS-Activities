const checkout = document.querySelector('.checkout');
const remove = document.querySelector('.remove');
const add = document.querySelector('.add');
const total = document.querySelector('.total');

const product1 = document.querySelector('.product1');
const product2 = document.querySelector('.product2');
const product3 = document.querySelector('.product3');


function addOne(){
    remove.innerHTML += `<li class="one">Product 1 10.00 <button>Remove</button> Amount</li>`;
}

function addTwo(){
    remove.innerHTML += `<li class="two">Product 1 10.00 <button>Remove</button> Amount</li>`;
}

function addThree(){
    remove.innerHTML += `<li class="three">Product 1 10.00 <button>Remove</button> Amount</li>`;
}

product1.addEventListener('click', addOne);
product2.addEventListener('click', addTwo);
product3.addEventListener('click', addThree);

