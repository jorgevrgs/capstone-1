import { buildTemplate, sponsorsTemplate } from '../helpers/templates.js';
import ApiClass from '../classes/ApiClass.js';

export default async () => {
  // ░█▀▀▀ █── █▀▀ █▀▄▀█ █▀▀ █▀▀▄ ▀▀█▀▀ █▀▀
  // ░█▀▀▀ █── █▀▀ █─▀─█ █▀▀ █──█ ──█── ▀▀█
  // ░█▄▄▄ ▀▀▀ ▀▀▀ ▀───▀ ▀▀▀ ▀──▀ ──▀── ▀▀▀
  const sponsorsElement = document.querySelector('.sponsors-content');

  if (sponsorsElement) {
    const api = new ApiClass();

    const result = await api.get('sponsors');

    const object = sponsorsTemplate(result);
    const element = buildTemplate(object);

    sponsorsElement.appendChild(element);
  }
};
