export default class ApiClass {
  #url = '';

  constructor() {
    this.#url = 'json/speakers.json';
  }

  get() {
    return new Promise((resolve, reject) => {
      fetch(this.#url)
        .then((res) => res.json())
        .then(resolve)
        .catch(reject);
    });
  }
}
