import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='flex bg-gray-100 min-h-screen'>
      {/* Desktop Sidebar */}
      <div className='hidden md:block w-64'>
        <Sidebar closeSidebar={() => setIsOpen(false)} />
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 z-30 transform 
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          transition-transform duration-300 md:hidden`}
      >
        <Sidebar closeSidebar={() => setIsOpen(false)} />
      </div>

      {/* Background overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className='fixed inset-0 bg-black bg-opacity-40 z-20 md:hidden'
        ></div>
      )}

      {/* Main Content */}
      <div className='flex-1'>
        <Header openSidebar={() => setIsOpen(true)} />
        <div className='p-6'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
