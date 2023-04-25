import Home from '~/pages/Home';
import Cart from '~/pages/Cart';
import Login from '~/pages/Login';

// Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/cart', component: Cart },
    { path: '/login', component: Login, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
