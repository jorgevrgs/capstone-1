import MockProvider from './MockProvider.js';

export default class ApiClass {
  #api = undefined;

  constructor(serviceProvider) {
    if (!serviceProvider) {
      this.#api = MockProvider;
    } else {
      this.#api = serviceProvider;
    }
  }

  get(service) {
    return this.#api.get(service);
  }
}
