import { read } from './reader';
import { json } from './parser';

export class GameSavingLoader {
  static load() {
    return read()
      .then(response => json(response))
      .then(data => {
        return new Promise(resolve =>
          resolve(JSON.parse(data))
        );
      });
  }
}