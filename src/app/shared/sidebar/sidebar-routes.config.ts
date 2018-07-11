import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
    {
        path: '/dashboard',
        title: 'Dashboard',
        icon: 'ft-zap',
        class: 'nav-item',
        badge: '',
        badgeClass: '',
        isExternalLink: false, isNavHeader: false,
        submenu: []
    },
    {
        path: '/trade-startegy',
        title: 'Trade Strategy',
        icon: 'ft-clipboard',
        class: 'nav-item',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        isNavHeader: false,
        submenu: []
    },
    {
        path: '/watch-list',
        title: 'Watch List',
        icon: 'ft-clipboard',
        class: 'nav-item',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        isNavHeader: false,
        submenu: []
    },
    {
        path: '/analytics',
        title: 'Analytics',
        icon: 'ft-file-text',
        class: 'nav-item',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        isNavHeader: false,
        submenu: []
    },
    {
        path: '/user-management',
        title: 'User Administration',
        icon: 'ft-users',
        class: 'nav-item',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        isNavHeader: false,
        submenu: []
    },
];
