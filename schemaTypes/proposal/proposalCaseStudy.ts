import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'proposalCaseStudy',
  title: 'Case study',
  type: 'object',
  fields: [
    defineField({
      name: 'testimonial',
      title: 'Testimonial',
      type: 'string',
      options: {
        list: ['spaceAndTime', 'fearlessFund', 'splice'],
      },
    }),
  ],
  preview: {
    select: {
      title: 'testimonial',
    },
  },
})
