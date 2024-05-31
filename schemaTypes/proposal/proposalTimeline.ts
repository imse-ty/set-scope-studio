import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'proposalTimeline',
  title: 'Timeline',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      initialValue: 'Project timeline',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'text',
      initialValue:
        'Rather than chipping away at stone, we shape each project with the simplicity and focus of a sculptor like molding clay.',
    }),
    defineField({
      name: 'timeline',
      title: 'Timeline',
      type: 'array',
      of: [
        {
          name: 'milestone',
          title: 'Milestone',
          type: 'object',
          fields: [
            {name: 'heading', title: 'Heading', type: 'string'},
            {name: 'text', title: 'Text', type: 'text'},
          ],
        },
      ],
    }),
  ],

  preview: {
    select: {
      title: 'heading',
      subtitle: 'body',
    },
  },
})
