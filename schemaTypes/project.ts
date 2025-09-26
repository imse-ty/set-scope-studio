import {orderRankField} from '@sanity/orderable-document-list'
import {MdOutlineImage} from 'react-icons/md'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  icon: MdOutlineImage,
  title: 'Projects',
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
      description:
        'A unique identifier for the project. Hint: Hit "Generate" to auto-fill from title.',
      validation: (Rule) =>
        Rule.required().custom((slug) => {
          if (typeof slug === 'undefined') return true
          const regex = /(^[a-z0-9-]+$)/ // Regex pattern goes here
          if (regex.test(slug.current || '')) {
            return true
          } else {
            return 'Invalid slug: Only numbers, lowercase letters, and dashes are permitted.' // Error message goes here
          }
        }),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'cover',
      title: 'Cover',
      type: 'image',
      fields: [
        {
          title: 'Alternative text',
          name: 'alt',
          type: 'string',
          description:
            'Write a short three-five word description of this image for SEO and accessibility.',
          options: {
            isHighlighted: true,
          },
        },
      ],
    }),
    defineField({
      name: 'videoUrl',
      title: 'Video URL',
      type: 'url',
      description: 'YouTube or Vimeo video URL.',
    }),
    defineField({
      name: 'info',
      title: 'Info items',
      type: 'array',
      of: [
        defineField({
          name: 'item',
          title: 'Info item',
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
              type: 'string',
            }),
          ],
          preview: {
            select: {
              title: 'label',
              subtitle: 'text',
            },
          },
        }),
      ],
    }),
    defineField({
      name: 'stats',
      title: 'Stats',
      type: 'array',
      of: [
        {
          name: 'statItem',
          title: 'Stat Item',
          type: 'object',
          fields: [
            defineField({name: 'prefix', title: 'Prefix', type: 'string'}),
            defineField({name: 'stat', title: 'Stat', type: 'string'}), // or 'number'
            defineField({name: 'suffix', title: 'Suffix', type: 'string'}),
          ],
          preview: {
            select: {prefix: 'prefix', stat: 'stat', suffix: 'suffix'},
            prepare: ({prefix, stat, suffix}) => ({
              title: `${prefix ?? ''} ${stat ?? ''} ${suffix ?? ''}`.trim(),
            }),
          },
        },
      ],
    }),
    defineField({
      title: 'Body',
      name: 'body',
      type: 'blockContent',
    }),
    orderRankField({type: 'project'}),
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      media: 'cover',
    },
  },
})
