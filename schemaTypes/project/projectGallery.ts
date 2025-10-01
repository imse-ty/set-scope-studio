import {defineType} from 'sanity'

export default defineType({
  name: 'projectGallery',
  title: 'Gallery',
  type: 'object',
  fields: [
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              title: 'Alternative text',
              type: 'string',
              description:
                'Write a short three-five word description of this image for SEO and accessibility.',
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    },
    {
      name: 'columns',
      title: 'Number of columns',
      type: 'number',
      options: {
        list: [
          {title: '1 Column', value: 1},
          {title: '2 Columns', value: 2},
          {title: '3 Columns', value: 3},
          {title: '4 Columns', value: 4},
        ],
      },
      initialValue: 2,
      validation: (Rule) => Rule.required().min(1).max(4),
    },
    // {
    //   name: 'gap',
    //   title: 'Gap size',
    //   type: 'string',
    //   options: {
    //     list: [
    //       {title: 'Small', value: 'small'},
    //       {title: 'Medium', value: 'medium'},
    //       {title: 'Large', value: 'large'},
    //     ],
    //   },
    //   initialValue: 'medium',
    // },
  ],
  preview: {
    select: {
      images: 'images',
      columns: 'columns',
    },
    prepare({images, columns}) {
      return {
        title: `Image Grid (${columns} columns)`,
        subtitle: `${images?.length || 0} images`,
        media: images?.[0],
      }
    },
  },
})
