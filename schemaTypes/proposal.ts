import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'proposal',
  title: 'Proposal',
  type: 'document',
  fields: [
    defineField({
      name: 'client',
      title: 'Client',
      type: 'reference',
      to: [{type: 'client'}],
    }),
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
      type: 'string',
    }),
    defineField({
      name: 'dateSent',
      title: 'Date sent',
      type: 'date',
    }),
    defineField({
      type: 'object',
      name: 'recipient',
      fields: [
        {
          title: 'Name',
          name: 'name',
          type: 'string',
        },
        {
          title: 'Title',
          name: 'title',
          type: 'string',
        },
        {
          title: 'Email',
          name: 'email',
          type: 'string',
        },
      ],
    }),

    defineField({
      name: 'projectCode',
      title: 'Project code',
      type: 'string',
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {list: ['In review', 'Approved']},
    }),
    defineField({
      name: 'pageColor',
      title: 'Page color',
      type: 'string',
      options: {
        list: [
          'geb',
          'sobek',
          'usir',
          'hapi',
          'ptah',
          'min',
          'nut',
          'taweret',
          'asset',
          'sekmet',
          'hetHeru',
          'oshun',
          'ra',
          'beset',
          'nso',
          'nsoWarm',
          'nsoHot',
          'nsoCool',
        ],
      },
    }),
    defineField({
      name: 'password',
      title: 'Password',
      type: 'string',
      description: 'Set a password for this page (leave empty for no protection)',
    }),
    defineField({
      name: 'sections',
      title: 'Page sections',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'proposalChallenge',
        }),
        defineArrayMember({
          type: 'proposalSolution',
        }),
        defineArrayMember({
          type: 'proposalMotionDesignApproach',
        }),
        defineArrayMember({
          type: 'proposalTimeline',
        }),
        defineArrayMember({
          type: 'proposalCaseStudy',
        }),
        defineArrayMember({
          type: 'proposalPricing',
        }),

        defineArrayMember({
          type: 'proposalNextSteps',
        }),
        defineArrayMember({
          type: 'proposalSection',
        }),
      ],
    }),
    defineField({
      name: 'footerMessage',
      title: 'Footer message',
      type: 'string',
    }),
  ],

  preview: {
    select: {
      title: 'title',
    },
  },
})
