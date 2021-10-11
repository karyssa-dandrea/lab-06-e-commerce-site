export function renderCrystals(crystal){
const crystalCard = document.createElement('div');
crystalCard.classList.add('crystal-card');

const crystalHeader = document.createElement('h2');
crystalHeader.textContent = crystal.name;

const img = document.createElement('img');
img.src = crystal.img;

crystalCard.append(crystalHeader, img);
return crystalCard;
}