import React from "react";

const Settings = () => {
  const company = {
    name: "Codveda Store",
    website: "codveda.com",
    currency: "INR",
  };

  return (
    <div className='bg-white p-6 rounded-lg shadow space-y-6'>
      <h2 className='text-xl font-semibold'>Settings</h2>

      <div className='space-y-4'>
        <div>
          <p className='text-sm text-gray-600'>Company Name</p>
          <input
            className='border p-2 rounded w-full'
            defaultValue={company.name}
          />
        </div>

        <div>
          <p className='text-sm text-gray-600'>Website</p>
          <input
            className='border p-2 rounded w-full'
            defaultValue={company.website}
          />
        </div>

        <div>
          <p className='text-sm text-gray-600'>Currency</p>
          <input
            className='border p-2 rounded w-full'
            defaultValue={company.currency}
          />
        </div>
      </div>

      <div className='flex gap-3 pt-2'>
        <button className='bg-blue-600 text-white px-4 py-2 rounded'>
          Save
        </button>
        <button className='bg-gray-200 px-4 py-2 rounded'>Cancel</button>
      </div>
    </div>
  );
};

export default Settings;
