import type { Schema, Struct } from '@strapi/strapi';

export interface NotaSection extends Struct.ComponentSchema {
  collectionName: 'components_nota_sections';
  info: {
    displayName: 'section';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files'>;
    text: Schema.Attribute.Blocks;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'nota.section': NotaSection;
    }
  }
}
