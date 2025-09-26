import {defineField, defineType} from 'sanity'
import {FaVimeo} from 'react-icons/fa'

export default defineType({
  name: 'vimeo',
  title: 'Vimeo',
  icon: FaVimeo,
  type: 'object',
  fields: [
    defineField({
      name: 'url',
      title: 'Vimeo URL',
      type: 'url',
      description: 'Paste a link to the content you want to display on your post',
    }),
  ],
  preview: {
    select: {title: 'url'},
  },
})
