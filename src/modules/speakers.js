import { buildTemplate, speakersTemplate } from '../helpers/templates.js';
import ApiClass from '../classes/ApiClass.js';

export default async () => {
  // ░█▀▀▀ █── █▀▀ █▀▄▀█ █▀▀ █▀▀▄ ▀▀█▀▀ █▀▀
  // ░█▀▀▀ █── █▀▀ █─▀─█ █▀▀ █──█ ──█── ▀▀█
  // ░█▄▄▄ ▀▀▀ ▀▀▀ ▀───▀ ▀▀▀ ▀──▀ ──▀── ▀▀▀
  const speakersElement = document.querySelector('.speakers');

  const api = new ApiClass();

  const result = await api.get();

  const object = speakersTemplate(result);
  const element = buildTemplate(object);

  speakersElement.appendChild(element);
};
