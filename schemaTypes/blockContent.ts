import {MdOutlineImage} from 'react-icons/md'
import {defineType, defineArrayMember} from 'sanity'

/**
 * This is the schema definition for the rich text fields used for
 * for this blog studio. When you import it in schemas.js it can be
 * reused in other parts of the studio with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */
export default defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
      // Styles let you set what your user can mark up blocks with. These
      // correspond with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [],
      lists: [],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [],
      },
    }),
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    defineArrayMember({
      type: 'projectCallout',
    }),
    defineArrayMember({
      type: 'image',
      icon: MdOutlineImage,
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
      options: {hotspot: true},
    }),
    defineArrayMember({
      type: 'projectGallery',
    }),
    defineArrayMember({
      type: 'vimeo',
    }),
  ],
})
