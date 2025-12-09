const Header = ({ openSidebar }) => {
  return (
    <div className='bg-white shadow p-4 flex justify-between items-center sticky top-0 z-20'>
      <div className='flex items-center gap-4'>
        <button className='md:hidden text-2xl' onClick={openSidebar}>
          ☰
        </button>

        <h1 className='text-xl font-semibold'>Admin Dashboard</h1>
      </div>

      <div className='flex gap-6 items-center text-gray-600'>
        <input
          type='text'
          placeholder='Search...'
          className='border p-2 rounded-lg hidden sm:block'
        />
        <span>🔔</span>
        <span className='font-bold'>👤 Admin</span>
      </div>
    </div>
  );
};

export default Header;
