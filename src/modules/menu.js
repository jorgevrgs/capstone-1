import { isMobile, toggleClass, removeClass } from '../helpers/utils.js';

export default () => {
  // ░█▀▀▀ █── █▀▀ █▀▄▀█ █▀▀ █▀▀▄ ▀▀█▀▀ █▀▀
  // ░█▀▀▀ █── █▀▀ █─▀─█ █▀▀ █──█ ──█── ▀▀█
  // ░█▄▄▄ ▀▀▀ ▀▀▀ ▀───▀ ▀▀▀ ▀──▀ ──▀── ▀▀▀

  const headerElement = document.querySelector('.header');
  const menuButtonElement = document.querySelector('.btn-menu');
  const menuLinkElements = document.querySelectorAll('.nav-item');

  // ░█▀▀▀ █──█ █▀▀▄ █▀▀ ▀▀█▀▀ ─▀─ █▀▀█ █▀▀▄ █▀▀
  // ░█▀▀▀ █──█ █──█ █── ──█── ▀█▀ █──█ █──█ ▀▀█
  // ░█─── ─▀▀▀ ▀──▀ ▀▀▀ ──▀── ▀▀▀ ▀▀▀▀ ▀──▀ ▀▀▀

  /**
   * Handle function if the screen width is desktop
   */
  const handleDesktop = () => {
    removeClass(headerElement, 'header-mobile');

    menuButtonElement.removeEventListener('click', () => {
      toggleClass(headerElement, 'header-mobile');
    });

    menuLinkElements.forEach((menuLink) => {
      menuLink.removeEventListener('click', () => {
        toggleClass(headerElement, 'header-mobile');
      });
    });
  };

  /**
   * Handle function if the screen width is mobile
   */
  const handleMobile = () => {
    menuButtonElement.addEventListener('click', () => {
      toggleClass(headerElement, 'header-mobile');
    });

    menuLinkElements.forEach((menuLink) => {
      menuLink.addEventListener('click', () => {
        toggleClass(headerElement, 'header-mobile');
      });
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
