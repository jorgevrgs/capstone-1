import { isMobile, toggleClass, removeClass } from '../helpers/utils.js';

export default () => {
  // ░█▀▀▀ █── █▀▀ █▀▄▀█ █▀▀ █▀▀▄ ▀▀█▀▀ █▀▀
  // ░█▀▀▀ █── █▀▀ █─▀─█ █▀▀ █──█ ──█── ▀▀█
  // ░█▄▄▄ ▀▀▀ ▀▀▀ ▀───▀ ▀▀▀ ▀──▀ ──▀── ▀▀▀

  const headerElement = document.querySelector('.header');
  const menuButtonElement = document.querySelector('.btn-menu');
  const closeButtonElement = document.querySelector('.btn-close');
  const menuLinkElements = document.querySelectorAll('.nav-item');

  // ░█▀▀▀ █──█ █▀▀▄ █▀▀ ▀▀█▀▀ ─▀─ █▀▀█ █▀▀▄ █▀▀
  // ░█▀▀▀ █──█ █──█ █── ──█── ▀█▀ █──█ █──█ ▀▀█
  // ░█─── ─▀▀▀ ▀──▀ ▀▀▀ ──▀── ▀▀▀ ▀▀▀▀ ▀──▀ ▀▀▀

  const handleToggle = () => {
    toggleClass(headerElement, 'header-mobile');
  };

  /**
   * Handle function if the screen width is desktop
   */
  const handleDesktop = () => {
    removeClass(headerElement, 'header-mobile');

    closeButtonElement.removeEventListener('click', handleToggle);
    menuButtonElement.removeEventListener('click', handleToggle);

    menuLinkElements.forEach((menuLink) => {
      menuLink.removeEventListener('click', handleToggle);
    });
  };

  /**
   * Handle function if the screen width is mobile
   */
  const handleMobile = () => {
    closeButtonElement.addEventListener('click', handleToggle);
    menuButtonElement.addEventListener('click', handleToggle);

    menuLinkElements.forEach((menuLink) => {
      menuLink.addEventListener('click', handleToggle);
    });
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
