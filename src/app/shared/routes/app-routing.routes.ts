import { Routes, RouterModule } from '@angular/router';

export const APP_ROUTES: Routes = [
    {
        path: 'dashboard',
        loadChildren: './pages/dashboard/dashboard.module#DashboardModule'
    },
    {
        path: 'user-management',
        loadChildren: './pages/user-management/user-management.module#UserManagementModule'
    },
    {
        path: 'analytics',
        loadChildren: './pages/analytics/analytics.module#AnalyticsModule'
    },
    {
        path: 'trade-startegy',
        loadChildren: './pages/trade-startegy/trade-startegy.module#TradeStartegyModule'
    },
    {
        path: 'watch-list',
        loadChildren: './pages/watch-list/watch-list.module#WatchListModule'
    },
];
