import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'projectCallout',
  title: 'Callout',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'text',
    }),
  ],
  preview: {select: {title: 'label', subtitle: 'text'}},
})
