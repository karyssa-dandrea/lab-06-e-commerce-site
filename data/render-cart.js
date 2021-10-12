import { crystals } from '../crystals.js';
import { cart } from './cart.js';
import { findById } from '../utils.js';

const tbody = document.getElementById('table-body');
const tr = document.createElement('tr');

for (let cartItem of cart){
    const crystalsData = findById(cartItem.id, crystals);
    const tdName = document.createElement('td');
    tdName.textContent = crystalsData.name;
    const tdPrice = document.createElement('td');
    tdPrice.textContent = crystalsData.price;
    const tdQty = document.createElement('td');
    tdQty.textContent = cartItem.qty;
    const tdTotal = document.createElement('td');
    tdTotal.textContent = cartItem.qty * crystalsData.price;

    tr.append(tdName, tdPrice, tdQty, tdTotal);
    tbody.appendChild('tr');

}