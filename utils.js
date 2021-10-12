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