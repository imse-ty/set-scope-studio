import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'proposalChallenge',
  title: 'Challenge',
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
        title: 'Challenge',
        subtitle: subtitle,
      }
    },
  },
})
