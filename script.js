// Initialize cart object to store items and their quantities
var cart = [];
var quantity = 0;

function update(cart) {
    var cart = document.getElementById("cart-value");
    cart.innerText = quantity;
}

const button_cart = document.getElementsByClassName("addToCart");

for (let i = 0; i < button_cart.length; i++) {
    button_cart[i].addEventListener("click", () => 
    {
        addToCart(button_cart[i]);
    });
}

function addToCart(target) {
    var closest = target.closest("div[id]");
    var id = closest.id;
    var element = document.getElementById(id);
    var name_html = document.querySelector(`#${element.id} div h3`);
    var price_html = document.querySelector(`#${element.id} .buy p`);
    var name = name_html.innerText;
    var price_$ = price_html.innerText;
    var price = parseFloat(price_$.replace("$", ""));
    quantity += 1;
    // checking whether the name of the product is already in the cart
    var index = cart.findIndex(function (cartItem) 
    {
        return cartItem.name.indexOf(name) > -1;
    });

    if (index === -1) { // If not, add new items
    var tempcart = { name: name, price: price, quantity: 1 };
    cart.push(tempcart);
    } 
    else {
    // if it is existing,increment the quantity to the cart
    cart[index].quantity++;
    }
    update(cart);
}

var totalAmount = 0;

document.getElementById("cart").addEventListener("click", () => 
{
    cart.forEach(function (item)
    {
        console.log(`Item name: ${item.name} - Quantity: ${item.quantity}`);
        totalAmount += item.price * item.quantity;
    });
    printTotal(totalAmount);
});

function printTotal(totalAmount) {
    var dollar = Math.floor(totalAmount);
    var cent = Math.floor((totalAmount - dollar) * 100);
    console.log(`The total amount is ${dollar}$ and ${cent} cents`);
}