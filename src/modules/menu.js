// @ts-check

import { isMobile, toggleClass, removeClass } from '../helpers/utils.js';

export default () => {
  // ░█▀▀▀ █── █▀▀ █▀▄▀█ █▀▀ █▀▀▄ ▀▀█▀▀ █▀▀
  // ░█▀▀▀ █── █▀▀ █─▀─█ █▀▀ █──█ ──█── ▀▀█
  // ░█▄▄▄ ▀▀▀ ▀▀▀ ▀───▀ ▀▀▀ ▀──▀ ──▀── ▀▀▀

  /** @type {HTMLElement} */
  const headerElement = document.querySelector('.header');

  /** @type {HTMLButtonElement} */
  const menuButtonElement = document.querySelector('.btn-menu');

  /** @type {HTMLButtonElement} */
  const closeButtonElement = document.querySelector('.btn-close');

  /** @type {NodeListOf<Element>} */
  const menuLinkElements = document.querySelectorAll('.nav-item');

  // ░█▀▀▀ █──█ █▀▀▄ █▀▀ ▀▀█▀▀ ─▀─ █▀▀█ █▀▀▄ █▀▀
  // ░█▀▀▀ █──█ █──█ █── ──█── ▀█▀ █──█ █──█ ▀▀█
  // ░█─── ─▀▀▀ ▀──▀ ▀▀▀ ──▀── ▀▀▀ ▀▀▀▀ ▀──▀ ▀▀▀

  const handleToggle = () => {
    if (headerElement) {
      toggleClass(headerElement, 'header-mobile');
    }
    toggleClass(document.body, 'overflow-y-hidden');
  };

  /**
   * Handle function if the screen width is desktop
   */
  const handleDesktop = () => {
    removeClass(headerElement, 'header-mobile');
    removeClass(document.body, 'overflow-y-hidden');

    if (closeButtonElement) {
      closeButtonElement.removeEventListener('click', handleToggle);
    }

    if (menuButtonElement) {
      menuButtonElement.removeEventListener('click', handleToggle);
    }

    if (menuButtonElement) {
      menuLinkElements.forEach((menuLink) => {
        menuLink.removeEventListener('click', handleToggle);
      });
    }
  };

  /**
   * Handle function if the screen width is mobile
   */
  const handleMobile = () => {
    if (closeButtonElement) {
      closeButtonElement.addEventListener('click', handleToggle);
    }

    if (menuButtonElement) {
      menuButtonElement.addEventListener('click', handleToggle);
    }

    if (menuLinkElements) {
      menuLinkElements.forEach((menuLink) => {
        menuLink.addEventListener('click', handleToggle);
      });
    }
  };

  // ░█▀▄▀█ █▀▀█ ─▀─ █▀▀▄
  // ░█░█░█ █▄▄█ ▀█▀ █──█
  // ░█──░█ ▀──▀ ▀▀▀ ▀──▀

  /**
   * Main function
   */
  const main = () => {
    if (isMobile()) {
      handleMobile();
    } else {
      handleDesktop();
    }
  };

  main();

  /**
   * Event listener if the screen is resized
   */
  window.addEventListener('resize', main);
};
