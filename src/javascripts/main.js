import '../styles/main.scss';
import bearCards from './Components.js/createBearCards';
import bearsArr from './Helpers.js/data.js/bearsData';

const init = () => {
  $('#app').html('<h1>HELLO! You are up and running!</h1>');
  console.warn('YOU ARE UP AND RUNNING!');
  bearCards(bearsArr);
};

init();
