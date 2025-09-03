import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'

export default defineConfig({
  name: 'default',
  title: 'Set Scope',

  projectId: 'ccltdabq',
  dataset: 'staging',

  plugins: [
    structureTool({
      structure: (S, context) => {
        return S.list()
          .title('Content')
          .items([
            // Minimum required configuration
            S.documentTypeListItem('client'),
            S.documentTypeListItem('proposal'),
            orderableDocumentListDeskItem({type: 'role', S, context}),
            S.documentTypeListItem('project'),
          ])
      },
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
  document: {
    // prev is the result from previous plugins and thus can be composed
    productionUrl: async (prev, context) => {
      // context includes the client and other details
      const {getClient, dataset, document} = context
      const client = getClient({apiVersion: '2023-05-31'})

      if (document._type === 'role') {
        const slug = await client.fetch(
          `*[_type == "role" && defined(slug.current)][0].slug.current`,
        )

        const params = new URLSearchParams()
        params.set('preview', 'true')
        params.set('dataset', dataset)

        return `http://localhost:3000/people/${slug}?${params}`
      }

      return prev
    },
  },
})
