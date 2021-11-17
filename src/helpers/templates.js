// @ts-check

/**
 * @typedef {({
 *  type: string,
 *  name: string,
 *  imageUrl: string,
 *  website: string
 * })} PartnerDef
 *
 * @typedef {({
 *  name: string,
 *  subtitle: string,
 *  imageUrl: string,
 *  description: string
 * })} SpeakerDef
 *
 * @typedef {({
 *  [key: string]: (string | number)
 * })} KeyValDef
 *
 * @typedef {({
 *   tag: string,
 *   className: (string | string[]),
 *   attributes?: KeyValDef,
 *   innerHTML?: string,
 *   textContent?: string,
 *   dataset?: KeyValDef,
 *   children?: (TemplateObjectDef[])
 * })} TemplateObjectDef
 */

/**
 *
 * @copyright @jorgevrgs, @vechicin, and @williamrolando88, coding partners
 *
 * @param {TemplateObjectDef} param0 Project element object
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
  /** @type HTMLElement */
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
    Object.keys(attributes).forEach((key /** @type {string} */) => {
      element.setAttribute(key, String(attributes[key]));
    });
  }

  if (dataset) {
    Object.keys(dataset).forEach((key /** @type {string} */) => {
      element.dataset[key] = String(dataset[key]);
    });
  }

  if (children) {
    children.forEach((child) => {
      element.appendChild(buildTemplate(child));
    });
  }

  return element;
};

/**
 *
 * @param {SpeakerDef} speaker Speaker object
 * @returns {TemplateObjectDef}
 */
export const speakerTemplate = (speaker) => ({
  tag: 'article',
  className: ['d-grid', 'gap-2', 'speaker'],
  children: [
    {
      tag: 'div',
      className: 'left',
      children: [
        {
          tag: 'img',
          className: 'picture',
          attributes: {
            src: speaker.imageUrl,
            alt: speaker.name,
          },
        } /** @type {TemplateObjectDef} */,
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
});

/**
 *
 * @param {[SpeakerDef]} speakers Speakers array
 * @returns {TemplateObjectDef}
 */
export const speakersTemplate = (speakers) => {
  const people = {
    tag: 'ul',
    className: [
      'd-flex',
      'flex-column',
      'd-md-grid',
      'gap-2',
      'gap-md-3',
      'people',
    ],
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

/**
 *
 * @param {PartnerDef} sponsor
 * @returns {TemplateObjectDef}
 */
export const sponsorTemplate = (sponsor) => ({
  tag: 'a',
  className: 'sponsor',
  attributes: {
    href: sponsor.website,
    target: '_blank',
  },
  children: [
    {
      tag: 'img',
      className: 'sponsor-logo',
      attributes: {
        src: sponsor.imageUrl,
        alt: sponsor.name,
      },
    },
  ],
});

/**
 *
 * @param {[PartnerDef]} sponsors
 * @returns {TemplateObjectDef}
 */
export const sponsorsTemplate = (sponsors) => {
  const result = {
    tag: 'ul',
    className: ['d-grid', 'gap-1', 'items'],
    children: [],
  };

  sponsors.forEach((sponsor) => {
    result.children.push({
      tag: 'li',
      className: 'item',
      children: [sponsorTemplate(sponsor)],
    });
  });

  return result;
};

/**
 *
 * @param {PartnerDef} partner
 * @returns {TemplateObjectDef}
 */
export const partnerTemplate = (partner) => ({
  tag: 'a',
  className: 'partner',
  attributes: {
    href: partner.website,
    target: '_blank',
  },
  children: [
    {
      tag: 'img',
      className: 'partner-logo',
      attributes: {
        width: 120,
        src: partner.imageUrl,
        alt: partner.name,
      },
    },
  ],
});

/**
 *
 * @param {[PartnerDef]} partners
 * @returns {TemplateObjectDef}
 */
export const partnersTemplate = (partners) => {
  /** @type {TemplateObjectDef} */
  const result = {
    tag: 'ul',
    className: [
      'd-flex',
      'flex-wrap',
      'justify-center',
      'align-center',
      'gap-1',
      'items',
    ],
    children: [],
  };

  partners.forEach((partner) => {
    /** @type {TemplateObjectDef} */
    const child = {
      tag: 'li',
      className: 'item',
      children: [partnerTemplate(partner)],
    };

    result.children.push(child);
  });

  return result;
};
