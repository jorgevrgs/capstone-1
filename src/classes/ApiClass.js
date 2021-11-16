export default class ApiClass {
  #url = '';

  constructor() {
    this.#url = '../assets/json/speakers.json';
  }

  get() {
    return new Promise((resolve, reject) => {
      import(this.#url)
        .then((res) => {
          resolve(res.default);
        })
        .catch(reject);
    });
  }
}
