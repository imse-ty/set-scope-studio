import {MdOutlinePerson} from 'react-icons/md'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'client',
  title: 'Clients',
  icon: MdOutlinePerson,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Client name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Client slug',
      type: 'slug',
      options: {
        source: 'name',
      },
    }),
    defineField({
      name: 'legalName',
      title: 'Client legal name',
      description:
        'Legal name of the client (weather it be a LLC, Inc, or DBA). If its just a person or sole proprietor, put in their full legal name.',
      type: 'string',
    }),
  ],

  preview: {
    select: {
      title: 'name',
      subtitle: 'legalName',
    },
  },
})
