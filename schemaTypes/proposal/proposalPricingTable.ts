import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'proposalPricingTable',
  title: 'Pricing Table',
  type: 'object',
  fields: [
    defineField({
      name: 'body',
      title: 'Body',
      type: 'text',
    }),
  ],
})
