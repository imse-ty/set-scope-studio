import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'proposalPricing',
  title: 'Pricing',
  type: 'object',
  fields: [
    defineField({
      name: 'options',
      title: 'Options',
      type: 'array',
      of: [
        {
          name: 'option',
          title: 'Option',
          type: 'object',
          fields: [
            {name: 'label', title: 'Label', type: 'string'},
            {name: 'heading', title: 'Heading', type: 'string'},
            {name: 'subtitle', title: 'Subtitle', type: 'string'},
            {name: 'description', title: 'Description', type: 'text'},
            {name: 'price', title: 'Price', type: 'string'},
            {name: 'priceIncrement', title: 'Price increment', type: 'string'},
            {name: 'priceSubtitle', title: 'Price subtitle', type: 'string'},
            {
              name: 'bulletPoints',
              title: 'Bullet points',
              type: 'array',
              of: [
                {
                  name: 'bulletPoint',
                  title: 'bulletPoint',
                  type: 'object',
                  fields: [
                    {name: 'title', title: 'Title', type: 'string'},
                    {name: 'text', title: 'Text', type: 'string'},
                  ],
                  preview: {
                    select: {
                      title: 'title',
                      subtitle: 'text',
                    },
                  },
                },
              ],
            },
          ],
          preview: {
            select: {
              title: 'heading',
              subtitle: 'price',
            },
          },
        },
      ],
    }),
  ],
})
