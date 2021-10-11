// import functions and grab DOM elements
import { renderCrystals } from './render-crystals.js';
import { crystals } from './crystals.js';

const crystalList = document.getElementById('crystal-list');

for (let crystal of crystals){
  const crystalCard = renderCrystals(crystal);
  crystalList.append(crystalCard);
}
