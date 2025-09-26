import {MdOutlineArticle} from 'react-icons/md'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'projectCallout',
  title: 'Callout',
  description: 'Callout section for project case study',
  icon: MdOutlineArticle,
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

  preview: {
    select: {
      title: 'label',
      subtitle: 'text',
    },
  },
})
