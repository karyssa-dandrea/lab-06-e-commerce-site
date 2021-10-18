import { addProduct } from './utils.js';

const form = document.getElementById('product-form');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const data = new FormData(form);
    const newCrystal = {
        id: data.get('id'),
        name: data.get('name'),
        price: Number(data.get('price')),
        category: data.get('category'),
        description: data.get('description')
    };
    addProduct(newCrystal);
    alert('new crystal added!');
});
