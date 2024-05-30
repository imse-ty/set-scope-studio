import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'vimeo',
  title: 'Vimeo',
  type: 'object',
  fields: [
    defineField({
      name: 'url',
      title: 'Vimeo URL',
      type: 'url',
      description: 'Paste a link to the content you want to display on your post',
    }),
  ],
})
