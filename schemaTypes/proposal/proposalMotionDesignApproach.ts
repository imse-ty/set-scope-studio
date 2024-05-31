import {defineType} from 'sanity'

export default defineType({
  name: 'proposalMotionDesignApproach',
  title: 'Motion design approach',
  type: 'object',
  fields: [
    {
      name: 'body',
      type: 'text',
      title: 'Body',
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Motion design approach',
      }
    },
  },
})
