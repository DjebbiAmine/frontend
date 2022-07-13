import { lazy } from "react"
const NotFound = lazy(() => import('../pages/Page404.page'));

const Humains = lazy(() => import('../pages/Humains.page'));


const routes = [

    {
        name: 'Humains',
        path: '/',
        exact: true,
        component: Humains,
        authentication: false,
        theme: "theme-1"
    },
    {
        name: 'NotFound',
        path: '/*',
        exact: false,
        component: NotFound,
        authentication: false,
    }
    
];

export default routes;