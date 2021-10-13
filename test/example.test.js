import { crystals } from '../crystals.js';
import { findById } from '../utils.js';
import { getCart } from '../utils.js';
import { addItem } from '../utils.js';

const test = QUnit.test;

test('findById should return the item matching the ID', (expect) => {
    const expected = {
        id: '4',
        name: 'Lapis',
        img: './assets/lapis.jpeg',
        price: 45.00,
        category: 'healing',
        description: 'Used to encourage self - awareness, self - confidence, self - knowledge, peace and harmony.'
    };
    const actual = findById('4', crystals);
    expect.deepEqual(actual, expected);
});

test('getCart should return the cart if it exisits', (expect) => {
    const fakeCart = [
        { id: '1', qty: 3 },
        { id: '3', qty: 4 }
    ];

    localStorage.setItem('CART', JSON.stringify(fakeCart));
    const cart = getCart();
    expect.deepEqual(cart, fakeCart);
});

test('getCart should return an empty array if the cart does not exist', (expect)=>{
    // arrange
    // nothing to arrange bc nothing in localStorage

    // act 
    const cart = getCart();

    // assert
    expect.deepEqual(cart, []);
});

test('addItem should increment the quantity if item in cart', (expect)=>{
    // arrange
    const fakeCart = [
        { id: '1', qty: 3 },
        { id: '3', qty: 4 }
    ];
    localStorage.setItem('CART', JSON.stringify(fakeCart));
    // act
    addItem('1');
    const cart = getCart();
    const expected = [
        { id: '1', qty: 4 },
        { id: '3', qty: 4 }
    ];
    // assert
    expect.deepEqual(cart, expected);
});

test('addItem should add an item if its not already there', (expect) =>{

     // arrange
    localStorage.removeItem('CART');

    const expected = [{ id: '1', qty: 1 }];

     // act
    addItem('1');
    const cart = getCart();

    expect.deepEqual(cart, expected);

});