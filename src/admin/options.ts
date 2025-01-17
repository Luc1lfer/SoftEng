import { AdminJSOptions } from 'adminjs';

import componentLoader from './component-loader.js';



const options: AdminJSOptions = {
  componentLoader,
  rootPath: '/admin',
  resources: [], 
  databases: [], 
  dashboard: {
    component: 'TrackingDashboard', 
  },
};
console.log('AdminJS Options Loaded');
export default options;
