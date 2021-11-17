// @ts-check

import { buildTemplate, partnersTemplate } from '../helpers/templates.js';
import ApiClass from '../classes/ApiClass.js';

export default async () => {
  // ░█▀▀▀ █── █▀▀ █▀▄▀█ █▀▀ █▀▀▄ ▀▀█▀▀ █▀▀
  // ░█▀▀▀ █── █▀▀ █─▀─█ █▀▀ █──█ ──█── ▀▀█
  // ░█▄▄▄ ▀▀▀ ▀▀▀ ▀───▀ ▀▀▀ ▀──▀ ──▀── ▀▀▀
  const partnersElement = document.querySelector('.partners-content');

  if (partnersElement) {
    const api = new ApiClass();

    const result = await api.get('sponsors');

    result.splice(0, 4);

    const object = partnersTemplate(result);
    const element = buildTemplate(object);

    partnersElement.appendChild(element);
  }
};
