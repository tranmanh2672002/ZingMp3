import Mymusic from '../pages/Mymusic';
import Zingchart from '../pages/Zingchart';
import Home from '~/pages/Home';
import Radio from '~/pages/Radio';
import Follow from '~/pages/Follow';

const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/my-music',
        component: Mymusic,
    },
    {
        path: '/zing-chart',
        component: Zingchart,
    },
    {
        path: '/radio',
        component: Radio,
    },
    {
        path: '/follow',
        component: Follow,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
