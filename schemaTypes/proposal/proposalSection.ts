import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'proposalSection',
  title: 'Custom section',
  type: 'object',
  fields: [
    defineField({
      name: 'pretext',
      title: 'Pretext',
      type: 'string',
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'text',
    }),
  ],

  preview: {
    select: {
      title: 'heading',
      subtitle: 'body',
    },
  },
})
