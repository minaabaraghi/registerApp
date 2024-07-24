import {Outlet} from 'react-router-dom';
import FixedBottomNavigation from '../components/bottomNavigation/bottomNavigation';

const MainLayout = () => {
    return (
        <>
            <Outlet />
            <FixedBottomNavigation />
        </>
    );
};

export default MainLayout;
