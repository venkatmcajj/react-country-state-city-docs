// assets
import { Home } from '@mui/icons-material';


// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
    id: 'dashboard',
    title: 'Docs',
    type: 'group',
    children: [
        {
            id: 'default',
            title: 'Getting Started',
            type: 'item',
            url: '/getting-started',
            icon: Home,
            breadcrumbs: true
        }
    ]
};

export default dashboard;
