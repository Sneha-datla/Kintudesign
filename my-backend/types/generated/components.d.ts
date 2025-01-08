import type { Struct, Schema } from '@strapi/strapi';

export interface SharedCookieButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_cookie_buttons';
  info: {
    displayName: 'Cookie Button';
    icon: 'mouse-pointer';
  };
  attributes: {
    buttonType: Schema.Attribute.Enumeration<['Primary', 'Secondary', 'Text']>;
    label: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.cookie-button': SharedCookieButton;
    }
  }
}
