// Import printToDom function //
import printToDom from '../Helpers.js/printToDom';
import bearsArr from '../Helpers.js/data.js/bearsData';

const bearsDiv = document.querySelector('#bearCards');
const bearCards = (arr) => {
  let domString = '';
  arr.forEach((item, i) => {
    domString += `<div class="card my-2" style="width: 18rem;" id=${i}>
     <div class="img-container" style="background-image: url('${item.imageUrl}');"></div>
     <div class="card-body"> 
      <p class="card-text">${item.bearName}</p>
       <p class="card-text">${item.descriptonOfBear}</p>
       <p class="card-text">${item.bakeTemp}</p>
       <p class="card-text">${item.drinkPairing}</p>
       <p class="card-text">${item.iceCream}</p>
       <button type="button" class="btn btn-danger" id="${i}">Delete</button>
     </div>
   </div>`;
  });
  printToDom('#bearsArr', bearsDiv);
  console.warn(bearsArr);
};

export default bearCards;
