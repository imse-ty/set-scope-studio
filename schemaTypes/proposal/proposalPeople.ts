import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'proposalPeople',
  title: 'Team',
  type: 'object',
  fields: [
    defineField({
      name: 'body',
      title: 'Body',
      type: 'text',
    }),
  ],
})
