import { ComponentLoader } from 'adminjs';

const componentLoader = new ComponentLoader();

const Components = {
    Dashboard: componentLoader.add('TrackingDashboard', './components/TrackingDashboard'),
}
console.log('Component Registered: TrackingDashboard'); // Debug log

export default componentLoader;
