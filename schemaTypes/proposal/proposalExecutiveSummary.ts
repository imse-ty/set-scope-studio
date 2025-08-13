import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'proposalExecutiveSummary',
  title: 'Executive Summary',
  type: 'object',
  fields: [
    defineField({
      name: 'body',
      title: 'Body',
      type: 'text',
    }),
  ],
})
