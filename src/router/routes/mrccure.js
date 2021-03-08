export default [
    {
        path: '/patients/out-patients',
        name: 'out-patients',
        component: () => import('@/views/mrccure/OutPatients.vue'),
    },
    {
        path: '/patients/:id',
        name: 'patient-record',
        component: () => import('@/views/mrccure/Patient.vue'),
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('@/views/mrccure/Dashboard.vue'),
    },
    {
        path: '/appointments',
        name: 'appointments',
        component: () => import('@/views/mrccure/Appontments.vue'),
    },
    {
        path: '/clinics',
        name: 'clinics',
        component: () => import('@/views/mrccure/Clinics.vue'),
    },
    {
        path: '/doctors',
        name: 'doctors',
        component: () => import('@/views/mrccure/Doctors.vue'),
    },
    {
        path: '/reports/lab',
        name: 'lab-reports',
        component: () => import('@/views/mrccure/LabReports.vue'),
    },
    {
        path: '/reports/radiology',
        name: 'radiology-reports',
        component: () => import('@/views/mrccure/LabReports.vue'),
    },
    {
        path: '/reports/sick-leave',
        name: 'sick-leave-reports',
        component: () => import('@/views/mrccure/LabReports.vue'),
    },
    {
        path: '/reports/request',
        name: 'request-report',
        component: () => import('@/views/mrccure/LabReports.vue'),
    },
    {
        path: '/reports/operative',
        name: 'operative-reports',
        component: () => import('@/views/mrccure/LabReports.vue'),
    },
    {
        path: '/reports/discharge',
        name: 'discharge-reports',
        component: () => import('@/views/mrccure/LabReports.vue'),
    },
    {
        path: '/reports/cardiology',
        name: 'cardiology-reports',
        component: () => import('@/views/mrccure/LabReports.vue'),
    },
    {
        path: '/medication',
        name: 'medication',
        component: () => import('@/views/mrccure/LabReports.vue'),
    },
    {
        path: '/medication',
        name: 'guardian-add',
        component: () => import('@/views/mrccure/LabReports.vue'),
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
