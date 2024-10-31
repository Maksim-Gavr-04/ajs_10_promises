import { read } from './reader';
import { json } from './parser';

export class GameSavingLoader {
  static load() {
    return read()
      .then(response => json(response))
      .then(response => {
        return new Promise(resolve =>
          resolve(JSON.parse(response))
        );
      });
  }
}