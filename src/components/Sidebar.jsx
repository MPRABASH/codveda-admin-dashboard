import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Sidebar = ({ closeSidebar }) => {
  return (
    <div className='text-white h-full bg-gray-800 p-6'>
      <img src={logo} alt='logo' className='w-16 mx-auto mb-6' />

      <div className='flex flex-col gap-4 text-lg '>
        <Link
          to='/'
          onClick={closeSidebar}
          className='p-4 hover:bg-gray-700 hover:text-white rounded-2xl'
        >
          Dashboard
        </Link>
        <Link
          to='/products'
          onClick={closeSidebar}
          className='p-4 hover:bg-gray-700 hover:text-white rounded-2xl'
        >
          Products
        </Link>
        <Link
          to='/orders'
          onClick={closeSidebar}
          className='p-4 hover:bg-gray-700 hover:text-white rounded-2xl'
        >
          Orders
        </Link>
        <Link
          to='/customer'
          onClick={closeSidebar}
          className='p-4 hover:bg-gray-700 hover:text-white rounded-2xl'
        >
          Customers
        </Link>
        <Link
          to='/settings'
          onClick={closeSidebar}
          className='p-4 hover:bg-gray-700 hover:text-white rounded-2xl'
        >
          Settings
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
