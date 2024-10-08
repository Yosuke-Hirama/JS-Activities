const cart = document.querySelector('.cart-items');
const totalDisplay = document.querySelector('.total');
const productButtons = document.querySelectorAll('.product');

let totalAmount = 0;
let cartItems = {};

const products = {
    product1: { name: "Product 1", price: 10 },
    product2: { name: "Product 2", price: 15 },
    product3: { name: "Product 3", price: 20 },
};

function addToCart(productId) {
    const {name, price} = products[productId];
    console.log({name, price});

    if (cartItems[name]){
        cartItems[name].quantity += 1;
        cartItems[name].price += price;
    } else {
        cartItems[name] = {
            price: price,
            quantity: 1,
        };
    }
    
    totalAmount += price;
    updateCartDisplay();
    updateTotal();
}

function removeFromCart(productName) {
    totalAmount -= cartItems[productName].price;
    delete cartItems[productName];
    updateCartDisplay();
    updateTotal();
}

function updateCartDisplay() {
    cart.innerHTML = '';
    console.log(cartItems);

    for (const productName in cartItems) {
        const { price, quantity } = cartItems[productName];

        const item = document.createElement('li');
        item.innerHTML = `
            <span>${productName} $${(price).toFixed(2)} <button class="remove">Remove</button> <span class="quantity">${quantity}</span></span>`;
        cart.appendChild(item);

        item.querySelector('.remove').addEventListener('click', () => {
            removeFromCart(productName);
        });
    }
}

function updateTotal() {
    totalDisplay.innerHTML = `Total: $${totalAmount.toFixed(2)}`;
}

productButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productId = button.id;
        addToCart(productId);
    });
});
