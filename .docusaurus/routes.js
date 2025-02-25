import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/personal-website/__docusaurus/debug',
    component: ComponentCreator('/personal-website/__docusaurus/debug', '363'),
    exact: true
  },
  {
    path: '/personal-website/__docusaurus/debug/config',
    component: ComponentCreator('/personal-website/__docusaurus/debug/config', 'c5c'),
    exact: true
  },
  {
    path: '/personal-website/__docusaurus/debug/content',
    component: ComponentCreator('/personal-website/__docusaurus/debug/content', 'dbb'),
    exact: true
  },
  {
    path: '/personal-website/__docusaurus/debug/globalData',
    component: ComponentCreator('/personal-website/__docusaurus/debug/globalData', '8b3'),
    exact: true
  },
  {
    path: '/personal-website/__docusaurus/debug/metadata',
    component: ComponentCreator('/personal-website/__docusaurus/debug/metadata', 'de2'),
    exact: true
  },
  {
    path: '/personal-website/__docusaurus/debug/registry',
    component: ComponentCreator('/personal-website/__docusaurus/debug/registry', '976'),
    exact: true
  },
  {
    path: '/personal-website/__docusaurus/debug/routes',
    component: ComponentCreator('/personal-website/__docusaurus/debug/routes', '376'),
    exact: true
  },
  {
    path: '/personal-website/blog',
    component: ComponentCreator('/personal-website/blog', 'a06'),
    exact: true
  },
  {
    path: '/personal-website/blog/archive',
    component: ComponentCreator('/personal-website/blog/archive', 'ddb'),
    exact: true
  },
  {
    path: '/personal-website/blog/authors',
    component: ComponentCreator('/personal-website/blog/authors', '26a'),
    exact: true
  },
  {
    path: '/personal-website/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/personal-website/blog/authors/all-sebastien-lorber-articles', '0ea'),
    exact: true
  },
  {
    path: '/personal-website/blog/authors/yangshun',
    component: ComponentCreator('/personal-website/blog/authors/yangshun', '88c'),
    exact: true
  },
  {
    path: '/personal-website/blog/first-blog-post',
    component: ComponentCreator('/personal-website/blog/first-blog-post', 'a07'),
    exact: true
  },
  {
    path: '/personal-website/blog/long-blog-post',
    component: ComponentCreator('/personal-website/blog/long-blog-post', 'f62'),
    exact: true
  },
  {
    path: '/personal-website/blog/mdx-blog-post',
    component: ComponentCreator('/personal-website/blog/mdx-blog-post', '47b'),
    exact: true
  },
  {
    path: '/personal-website/blog/tags',
    component: ComponentCreator('/personal-website/blog/tags', '9c4'),
    exact: true
  },
  {
    path: '/personal-website/blog/tags/docusaurus',
    component: ComponentCreator('/personal-website/blog/tags/docusaurus', 'f1a'),
    exact: true
  },
  {
    path: '/personal-website/blog/tags/facebook',
    component: ComponentCreator('/personal-website/blog/tags/facebook', '476'),
    exact: true
  },
  {
    path: '/personal-website/blog/tags/hello',
    component: ComponentCreator('/personal-website/blog/tags/hello', '352'),
    exact: true
  },
  {
    path: '/personal-website/blog/tags/hola',
    component: ComponentCreator('/personal-website/blog/tags/hola', '03e'),
    exact: true
  },
  {
    path: '/personal-website/blog/welcome',
    component: ComponentCreator('/personal-website/blog/welcome', 'c93'),
    exact: true
  },
  {
    path: '/personal-website/markdown-page',
    component: ComponentCreator('/personal-website/markdown-page', '489'),
    exact: true
  },
  {
    path: '/personal-website/docs',
    component: ComponentCreator('/personal-website/docs', '6ec'),
    routes: [
      {
        path: '/personal-website/docs',
        component: ComponentCreator('/personal-website/docs', 'f37'),
        routes: [
          {
            path: '/personal-website/docs',
            component: ComponentCreator('/personal-website/docs', 'd3f'),
            routes: [
              {
                path: '/personal-website/docs/category/tutorial---basics',
                component: ComponentCreator('/personal-website/docs/category/tutorial---basics', '37e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/personal-website/docs/category/tutorial---extras',
                component: ComponentCreator('/personal-website/docs/category/tutorial---extras', 'eee'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/personal-website/docs/intro',
                component: ComponentCreator('/personal-website/docs/intro', '11e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/personal-website/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/personal-website/docs/tutorial-basics/congratulations', '55e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/personal-website/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/personal-website/docs/tutorial-basics/create-a-blog-post', 'bbc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/personal-website/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/personal-website/docs/tutorial-basics/create-a-document', '55c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/personal-website/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/personal-website/docs/tutorial-basics/create-a-page', '6b5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/personal-website/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/personal-website/docs/tutorial-basics/deploy-your-site', '615'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/personal-website/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/personal-website/docs/tutorial-basics/markdown-features', '463'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/personal-website/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/personal-website/docs/tutorial-extras/manage-docs-versions', '338'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/personal-website/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/personal-website/docs/tutorial-extras/translate-your-site', '1e8'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/personal-website/',
    component: ComponentCreator('/personal-website/', 'f15'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
