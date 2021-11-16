/**
 *
 * @copyright @jorgevrgs, @vechicin, and @williamrolando88, coding partners
 *
 * @param {object} param0 Project element object
 * @argument param0.tag {string}
 * @argument param0.className {string | array}
 * @argument param0.attributes {object}
 * @argument param0.children {array}
 * @argument param0.innerHTML {string}
 * @argument param0.textContent {string}
 * @argument param0.dataset {object}
 *
 * @returns {HTMLElement}
 */
export const buildTemplate = ({
  tag,
  className,
  attributes,
  children,
  innerHTML,
  textContent,
  dataset = undefined,
}) => {
  /** @type Element */
  const element = document.createElement(tag);

  if (Array.isArray(className)) {
    element.classList.add(...className);
  } else if (typeof className === 'string' && className.length) {
    element.classList.add(className);
  }

  if (textContent) {
    element.textContent = textContent;
  } else if (innerHTML) {
    element.innerHTML = innerHTML;
  }

  if (attributes) {
    Object.keys(attributes).forEach((key) => {
      element.setAttribute(key, attributes[key]);
    });
  }

  if (dataset) {
    Object.keys(dataset).forEach((key) => {
      element.dataset[key] = dataset[key];
    });
  }

  if (children) {
    children.forEach((child) => {
      element.appendChild(buildTemplate(child));
    });
  }

  return element;
};

export const speakerTemplate = (speaker) => {
  const image = new URL(speaker.imageUrl, import.meta.url).href;

  return {
    tag: 'article',
    className: ['d-grid', 'gap-1', 'speaker'],
    children: [
      {
        tag: 'div',
        className: 'left',
        children: [
          {
            tag: 'img',
            className: 'picture',
            attributes: {
              src: image,
              alt: speaker.name,
            },
          },
        ],
      },
      {
        tag: 'div',
        className: 'right',
        children: [
          {
            tag: 'h3',
            className: ['font-size-h3', 'name'],
            textContent: speaker.name,
          },
          {
            tag: 'p',
            className: ['font-size-h6', 'subtitle'],
            textContent: speaker.subtitle,
          },
          {
            tag: 'p',
            className: 'description',
            textContent: speaker.description,
          },
        ],
      },
    ],
  };
};

export const speakersTemplate = (speakers) => {
  const people = {
    tag: 'ul',
    className: ['d-flex', 'flex-column', 'flex-md-row', 'gap-2', 'people'],
    children: [],
  };

  speakers.forEach((speaker) => {
    people.children.push({
      tag: 'li',
      className: 'person',
      children: [speakerTemplate(speaker)],
    });
  });

  return people;
};
