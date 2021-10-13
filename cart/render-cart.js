import { crystals } from '../crystals.js';
import { cart } from '../data/cart.js';
import { calculateOrderTotal, findById, toUSD } from '../utils.js';

const tbody = document.getElementById('table-body');

for (let cartItem of cart){
    const crystalsData = findById(cartItem.id, crystals);
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    tdName.textContent = crystalsData.name;
    const tdPrice = document.createElement('td');
    tdPrice.textContent = crystalsData.price;
    const tdQty = document.createElement('td');
    tdQty.textContent = cartItem.qty;
    const tdTotal = document.createElement('td');
    tdTotal.textContent = cartItem.qty * crystalsData.price;
    const orderTotal = calculateOrderTotal(cart, crystals);
    const tdOrderTotal = document.getElementById('total');
    tdOrderTotal.textContent = toUSD(orderTotal);

    tr.append(tdName, tdPrice, tdQty, tdTotal);
    tbody.appendChild(tr);
}

const orderButton = document.getElementById('order-button');
orderButton.addEventListener('click', ()=>{
    localStorage.removeItem('CART');
    window.location.replace('..');
}); 