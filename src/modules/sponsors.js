import { buildTemplate, sponsorsTemplate } from '../helpers/templates.js';
import ApiClass from '../classes/ApiClass.js';

export default async () => {
  // ░█▀▀▀ █── █▀▀ █▀▄▀█ █▀▀ █▀▀▄ ▀▀█▀▀ █▀▀
  // ░█▀▀▀ █── █▀▀ █─▀─█ █▀▀ █──█ ──█── ▀▀█
  // ░█▄▄▄ ▀▀▀ ▀▀▀ ▀───▀ ▀▀▀ ▀──▀ ──▀── ▀▀▀
  const speakersElement = document.querySelector('.sponsors-content');

  const api = new ApiClass('sponsors');

  const result = await api.get();

  const object = sponsorsTemplate(result);
  const element = buildTemplate(object);

  speakersElement.appendChild(element);
};
