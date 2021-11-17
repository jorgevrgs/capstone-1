export default class MockProvider {
  static get(service) {
    return new Promise((resolve, reject) => {
      fetch(`/capstone-1/mock/${service}.json`)
        .then((res) => res.json())
        .then(resolve)
        .catch(reject);
    });
  }
}
