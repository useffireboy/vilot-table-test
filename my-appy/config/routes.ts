const routes = [
  {
    path: '/',
    component: '@/layouts/index',
    layout:false,
    routes: [
      // {
      //   path: '/',
      //   component: './Tool2',
      //   hideInMenu: true,
      // },
      {
        path: '/',
        redirect:'/serial'
      },
      // {
      //   name: 'serial',
      //   path: '/serial',
      //   component: './Attachments',
      //   hideInMenu: true,
      // },
      // {
      //   name: 'list',
      //   path: '/serial/attachments/:id',
      //   component: './Attachments/components/List',
      //   hideInMenu: true,
      // },
      {
        name: 'list',
        path: '/serial',
        component: './VTableTest',
        hideInMenu: true,
      },
      {
        name: 'tool',
        path: '/tool',
        component: './Tool',
        hideInMenu: true,
      },
      {
        name: 'tool2',
        path: '/tool2',
        component: './Tool2',
        hideInMenu: true,
      },
      {
        name: 'tool3',
        path: '/tool3',
        component: './Tool3',
        hideInMenu: true,
      }
    ]
  },
]

export default routes;