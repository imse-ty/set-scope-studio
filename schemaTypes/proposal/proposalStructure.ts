import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'proposalStructure',
  title: 'Structure',
  type: 'object',
  fields: [
    defineField({
      name: 'body',
      title: 'Body',
      type: 'text',
    }),
  ],
})
