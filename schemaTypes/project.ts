import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
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
          validation: (Rule) => Rule.required(),
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
              title: `${prefix ?? ''}${stat ?? ''}${suffix ?? ''}`.trim(),
            }),
          },
        },
      ],
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
      title: 'Body',
      name: 'body',
      type: 'blockContent',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
    },
  },
})
