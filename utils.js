import { crystals } from './crystals.js';

export function findById(id, items){
    for (let item of items){
        if (item.id === id){
            return item;
        }
    }  
}

export function calculateOrderTotal(cart, product){
    let orderTotal = 0;
    for (let item of cart){
        const crystals = findById(item.id, product);
        orderTotal = orderTotal + crystals.price * item.qty;
    }
    return orderTotal;
}

export function toUSD(number){
    return number.toLocaleString('en-us', { style: 'currency', currency: 'USD' });
}

export function getCart(){
    const cartString = localStorage.getItem('CART') || '[]';
    const cart = JSON.parse(cartString);
    return cart;
}

export function addItem(id){
    const cart = getCart();
    const cartItem = findById(id, cart);
    if (cartItem){
        cartItem.qty++;
    } else {
        const newItem = { 'id': id, 'qty': 1 };
        cart.push(newItem);
    }
    const stringCart = JSON.stringify(cart);
    localStorage.setItem('CART', stringCart);
}

export function clearCart(){
    localStorage.removeItem('CART'); 
}

export function getProducts(){
    const productsString = localStorage.getItem('PRODUCTS');
    const products = JSON.parse(productsString);
    if (!products){
        const crystalsString = JSON.stringify(crystals); 
        localStorage.setItem('PRODUCTS', crystalsString); 
    }
    return products || crystals;

}

export function addProduct(newCrystal){
    let products = getProducts();
    products.push(newCrystal);
    let productsString = JSON.stringify(products);
    localStorage.setItem('PRODUCTS', productsString);
}