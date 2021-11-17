// @ts-check

import { buildTemplate, speakersTemplate } from '../helpers/templates.js';
import ApiClass from '../classes/ApiClass.js';

export default async () => {
  // ░█▀▀▀ █── █▀▀ █▀▄▀█ █▀▀ █▀▀▄ ▀▀█▀▀ █▀▀
  // ░█▀▀▀ █── █▀▀ █─▀─█ █▀▀ █──█ ──█── ▀▀█
  // ░█▄▄▄ ▀▀▀ ▀▀▀ ▀───▀ ▀▀▀ ▀──▀ ──▀── ▀▀▀
  const speakersElement = document.querySelector('.speakers');

  if (speakersElement) {
    const api = new ApiClass();

    const result = await api.get('speakers');

    const object = speakersTemplate(result);
    const element = buildTemplate(object);

    speakersElement.appendChild(element);
  }
};
