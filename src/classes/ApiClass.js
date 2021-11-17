import MockProvider from './MockProvider.js';

export default class ApiClass {
  #api = undefined;

  constructor(serviceProvider) {
    if (!serviceProvider) {
      const mockProvider = new MockProvider();

      this.#api = mockProvider;
    } else {
      this.#api = serviceProvider;
    }
  }

  get(service) {
    return this.#api.get(service);
  }
}
