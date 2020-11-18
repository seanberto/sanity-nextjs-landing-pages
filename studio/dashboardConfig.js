export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fb5afa9eb7a53008e491fb1',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-6m19et7u',
                  apiId: '653791ee-76c4-4a24-8983-04448a26c0d1'
                },
                {
                  buildHookId: '5fb5afa990032e0107a40f75',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-ywz4eoh3',
                  apiId: '9ea0d09f-a838-4bfe-98a3-cc03b9cb8e94'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/seanberto/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-ywz4eoh3.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
