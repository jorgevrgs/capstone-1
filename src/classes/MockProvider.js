export default class MockProvider {
  constructor() {}

  async get(service) {
    const res = await import(`../mock/${service}.json`);
    const data = res.default;

    return data;
  }
}
