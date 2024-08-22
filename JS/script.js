let cartItems = [];
let totalPrice = 0;

function addToCart(price) {
    cartItems.push(price);
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById("cartItems");
    const total = document.getElementById("totalPrice");
    cartList.innerHTML = '';
    
    cartItems.forEach((price, index) => {
        let listItem = document.createElement("li");
        listItem.textContent = `Item ${index + 1}: R${price}`;
        cartList.appendChild(listItem);
    });
    
    totalPrice = cartItems.reduce((sum, price) => sum + price, 0);
    total.textContent = totalPrice;
}

function refreshCart() {
    cartItems = [];
    totalPrice = 0;
    updateCart();
}
