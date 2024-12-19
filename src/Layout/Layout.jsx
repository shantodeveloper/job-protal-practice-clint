import { Outlet } from 'react-router-dom';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar></Navbar>
      <div className="flex-grow py-10">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
