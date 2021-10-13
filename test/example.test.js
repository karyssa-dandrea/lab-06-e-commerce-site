import { crystals } from '../crystals.js';
import { findById } from '../utils.js';

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
