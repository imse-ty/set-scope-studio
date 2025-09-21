import {orderRankField} from '@sanity/orderable-document-list'
import {MdWorkOutline} from 'react-icons/md'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'role',
  title: 'Jobs',
  icon: MdWorkOutline,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'rate',
      title: 'Rate',
      type: 'string',
    }),
    defineField({
      name: 'rateSubtitle',
      title: 'Rate subtitle',
      type: 'string',
    }),
    defineField({
      title: 'Is actively looking?',
      name: 'isActivelyLooking',
      type: 'boolean',
    }),
    defineField({
      title: 'Tags',
      name: 'tags',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      title: 'Form link',
      name: 'formLink',
      type: 'url',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
    orderRankField({type: 'role'}),
  ],

  preview: {
    select: {
      title: 'title',
    },
  },
})
