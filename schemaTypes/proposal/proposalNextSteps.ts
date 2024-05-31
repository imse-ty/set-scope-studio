import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'proposalNextSteps',
  title: 'Next steps',
  type: 'object',
  fields: [
    defineField({
      name: 'body',
      title: 'Body',
      type: 'text',
    }),
  ],

  preview: {
    select: {
      subtitle: 'body',
    },
    prepare(selection) {
      const {subtitle} = selection

      return {
        title: 'Next steps',
        subtitle: subtitle,
      }
    },
  },
})
