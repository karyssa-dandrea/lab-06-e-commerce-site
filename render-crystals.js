export function renderCrystals(crystal){
const crystalCard = document.createElement('div');
crystalCard.classList.add('crystal-card');

const crystalHeader = document.createElement('h2');
crystalHeader.textContent = crystal.name;

const crystalPrice = document.createElement('h3');
crystalPrice.textContent = `Pricing: $${crystal.price}`;

const img = document.createElement('img');
img.src = crystal.img;

crystalCard.append(crystalHeader, img, crystalPrice);
return crystalCard;
}