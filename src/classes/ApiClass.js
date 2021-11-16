export default class ApiClass {
  #url = '';

  constructor(service) {
    this.#url = `json/${service}.json`;
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
