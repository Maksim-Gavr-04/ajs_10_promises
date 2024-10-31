import { GameSavingLoader } from './GameSavingLoader';

GameSavingLoader.load()
  .then(saving => {
    // saving объект класса GameSaving
    console.log(saving);
  }, error => {
    // ...
    console.error(error);
  });

// TODO: write code here

console.log('app worked!');