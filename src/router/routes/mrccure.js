export default [
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('@/views/dashboard/analytics/Analytics.vue'),
    },
    {
        path: '/appointments',
        name: 'appointments',
        component: () => import('@/views/dashboard/ecommerce/Ecommerce.vue'),
    },
    {
        path: '/clinics',
        name: 'clinics',
        component: () => import('@/views/dashboard/analytics/Analytics.vue'),
    },
    {
        path: '/doctors',
        name: 'doctors',
        component: () => import('@/views/dashboard/ecommerce/Ecommerce.vue'),
    },
    {
        path: '/medication',
        name: 'medication',
        component: () => import('@/views/dashboard/analytics/Analytics.vue'),
    },
    {
        path: '/health-summary',
        name: 'health-summary',
        component: () => import('@/views/dashboard/ecommerce/Ecommerce.vue'),
    },
    {
        path: '/retail',
        name: 'retail',
        component: () => import('@/views/dashboard/analytics/Analytics.vue'),
    },
    {
        path: '/locations',
        name: 'locations',
        component: () => import('@/views/dashboard/ecommerce/Ecommerce.vue'),
    },
    {
        path: '/health-tips',
        name: 'health-tips',
        component: () => import('@/views/dashboard/analytics/Analytics.vue'),
    },
    {
        path: '/contact',
        name: 'contact',
        component: () => import('@/views/dashboard/ecommerce/Ecommerce.vue'),
    },
    {
        path: '/apps/invoice/list',
        name: 'apps-invoice-list',
        component: () =>
            import('@/views/apps/invoice/invoice-list/InvoiceList.vue'),
    },
    {
        path: '/apps/invoice/preview/:id',
        name: 'apps-invoice-preview',
        component: () =>
            import('@/views/apps/invoice/invoice-preview/InvoicePreview.vue'),
    },
    {
        path: '/apps/invoice/edit/:id',
        name: 'apps-invoice-edit',
        component: () =>
            import('@/views/apps/invoice/invoice-edit/InvoiceEdit.vue'),
    },
    {
        path: '/request-report',
        name: 'request-report',
        component: () => import('@/views/dashboard/ecommerce/Ecommerce.vue'),
    },
    {
        path: '/operative-reports',
        name: 'operative-reports',
        component: () => import('@/views/dashboard/ecommerce/Ecommerce.vue'),
    },
    {
        path: '/discharge-reports',
        name: 'discharge-reports',
        component: () => import('@/views/dashboard/ecommerce/Ecommerce.vue'),
    },
    {
        path: '/cardiology-reports',
        name: 'cardiology-reports',
        component: () => import('@/views/dashboard/ecommerce/Ecommerce.vue'),
    },
    {
        path: '/error-404',
        name: 'error-404',
        component: () => import('@/views/error/Error404.vue'),
        meta: {
            layout: 'full',
            resource: 'Auth',
            action: 'read',
        },
    },
    {
        path: '/login',
        name: 'auth-login',
        component: () => import('@/views/mrccure/Login.vue'),
        meta: {
            layout: 'full',
            resource: 'Auth',
            redirectIfLoggedIn: true,
        },
    },
    {
        path: '/register',
        name: 'auth-register',
        component: () => import('@/views/mrccure/Register.vue'),
        meta: {
            layout: 'full',
            resource: 'Auth',
            redirectIfLoggedIn: true,
        },
    },
]
