import { GameSavingLoader } from './GameSavingLoader';

// TODO: write code here
GameSavingLoader.load()
  .then(saving => {
    // saving объект класса GameSaving
    console.log(saving);
  }, error => {
    // ...
    console.log(`Ошибка: ${error}`);
  });

console.log('app worked!');