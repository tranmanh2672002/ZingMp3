import MyMusic from '../pages/MyMusic';
import ZingChart from '../pages/ZingChart';
import Radio from '~/pages/Radio';
import Follow from '~/pages/Follow';
import HomePage from '~/pages/Home';

const publicRoutes = [
    {
        path: '/',
        component: HomePage,
    },
    {
        path: '/myMusic',
        component: MyMusic,
    },
    {
        path: '/zingChart',
        component: ZingChart,
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
