import {defineDocuments, defineLocations} from 'sanity/presentation'

// Configures the "Used on x pages" banner
export const locations = {
  // Map document types to frontend routes
  project: defineLocations({
    select: {title: 'title', slug: 'slug.current'},
    resolve: (doc) => ({
      locations: [{title: doc.title, href: `/work/${doc.slug}`}],
    }),
  }),
  // ...
}

// Configures documents presentation tool should open by default when navigating to an URL
export const mainDocuments = defineDocuments([
  {
    route: '/work/:slug',
    filter: `_type == "project" && slug.current == $slug`,
  },
  // ...
])
