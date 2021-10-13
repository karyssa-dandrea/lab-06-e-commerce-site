// import functions and grab DOM elements
import { renderCrystals } from './render-crystals.js';
import { crystals } from './crystals.js';
import { addItem } from './utils.js';

const crystalList = document.getElementById('crystal-list');

for (let crystal of crystals){
    const crystalCard = renderCrystals(crystal);
    crystalList.append(crystalCard);
}

const addButtons = document.querySelectorAll('.addButton');
for (let addBtn of addButtons){
    addBtn.addEventListener('click', ()=>{
        addItem(addBtn.id);
        alert('Added item to cart');
    });
}