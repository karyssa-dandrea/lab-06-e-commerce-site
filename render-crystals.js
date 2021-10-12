export function renderCrystals(crystal){
    const crystalCard = document.createElement('div');
    crystalCard.classList.add('crystal-card');

    const crystalHeader = document.createElement('h2');
    crystalHeader.textContent = crystal.name;

    const crystalPrice = document.createElement('h3');
    crystalPrice.textContent = `Pricing: $${crystal.price}`;

    const crystalCategory = document.createElement('h4');
    crystalCategory.textContent = crystal.category;

    const crystalDescription = document.createElement('p');
    crystalDescription.textContent = crystal.description;

    const img = document.createElement('img');
    img.src = crystal.img;

    crystalCard.append(crystalHeader, img, crystalPrice, crystalCategory, crystalDescription);
    return crystalCard;
}