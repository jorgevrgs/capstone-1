export default class ApiClass {
  #url = '';

  constructor(url) {
    this.#url = url;
  }

  async get() {
    try {
      const result = await fetch(this.#url).then((res) => res.json());

      return result;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
