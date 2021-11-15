import { buildTemplate, speakersTemplate } from '../helpers/templates.js';
import ApiClass from '../classes/ApiClass.js';

export default async () => {
  // ░█▀▀▀ █── █▀▀ █▀▄▀█ █▀▀ █▀▀▄ ▀▀█▀▀ █▀▀
  // ░█▀▀▀ █── █▀▀ █─▀─█ █▀▀ █──█ ──█── ▀▀█
  // ░█▄▄▄ ▀▀▀ ▀▀▀ ▀───▀ ▀▀▀ ▀──▀ ──▀── ▀▀▀
  const speakersElement = document.querySelector('.speakers');

  const url = '/json/speakers.json';
  const api = new ApiClass(url);

  const result = await api.get();

  const object = speakersTemplate(result);
  const element = buildTemplate(object);

  speakersElement.appendChild(element);
};
