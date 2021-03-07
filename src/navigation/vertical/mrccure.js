export default [
    {
        header: 'Patient Screens',
    },
    {
        title: 'Dashboard',
        route: 'dashboard',
        icon: 'HomeIcon',
    },
    {
        title: 'Manage Appointments',
        route: 'appointments',
        icon: 'CalendarIcon',
    },
    {
        title: 'Clinics',
        route: 'clinics',
        icon: 'ActivityIcon',
    },
    {
        title: 'Find a doctor',
        route: 'doctors',
        icon: 'UserIcon',
    },
    {
        title: 'Reports',
        icon: 'FileTextIcon',
        children: [
            {
                title: 'Lab Reports',
                route: 'apps-invoice-list',
            },
            {
                title: 'Radiology Reports',
                route: { name: 'apps-invoice-preview', params: { id: 4987 } },
            },
            {
                title: 'Sick Leave Reports',
                route: { name: 'apps-invoice-edit', params: { id: 4987 } },
            },
            {
                title: 'Request a Report',
                route: 'request-report',
            },
            {
                title: 'Operative Reports',
                route: 'operative-reports',
            },
            {
                title: 'Discharge Reports',
                route: 'discharge-reports',
            },
            {
                title: 'Cardiology Reports',
                route: 'cardiology-reports',
            },
        ],
    },
    {
        title: 'Prescriptions/Medications',
        route: 'medication',
        icon: 'FileIcon',
    },
    {
        title: 'Add Guardian',
        route: 'medication',
        icon: 'UserIcon',
    },
    {
        title: 'Health Summary',
        route: 'health-summary',
        icon: 'HeartIcon',
    },
    {
        title: 'Retail & Facilities',
        route: 'retail',
        icon: 'ShoppingBagIcon',
    },
    {
        title: 'Location Map',
        route: 'locations',
        icon: 'MapPinIcon',
    },
    {
        title: 'Health Tips',
        route: 'health-tips',
        icon: 'InfoIcon',
    },
    {
        title: 'Contact us',
        route: 'contact',
        icon: 'PhoneCallIcon',
    },
]
