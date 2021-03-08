export default [
    {
        header: 'Doctors Screens',
    },
    {
        title: 'Outpatients',
        route: 'out-patients',
        icon: 'LogOutIcon',
    },
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
                route: {
                    name: 'lab-reports',
                    params: { title: 'Lab Reports' },
                },
            },
            {
                title: 'Radiology Reports',
                route: {
                    name: 'radiology-reports',
                    params: { title: 'Radiology Reports' },
                },
            },
            {
                title: 'Sick Leave Reports',
                route: {
                    name: 'sick-leave-reports',
                    params: { title: 'Sick Leave Reports' },
                },
            },
            {
                title: 'Request a Report',
                route: {
                    name: 'request-report',
                    params: { title: 'Request Report' },
                },
            },
            {
                title: 'Operative Reports',
                route: {
                    name: 'operative-reports',
                    params: { title: 'Operative Reports' },
                },
            },
            {
                title: 'Discharge Reports',
                route: {
                    name: 'discharge-reports',
                    params: { title: 'Discharge Reports' },
                },
            },
            {
                title: 'Cardiology Reports',
                route: {
                    name: 'cardiology-reports',
                    params: { title: 'Cardiology Reports' },
                },
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
        route: 'guardian-add',
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
