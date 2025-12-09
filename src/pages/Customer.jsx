import React from "react";

const Customers = () => {
  const customers = [
    { name: "Alice Johnson", email: "alice@ex.com", spent: 1245 },
    { name: "Bob Smith", email: "bob@ex.com", spent: 856 },
    { name: "Carol Davis", email: "carol@ex.com", spent: 2340 },
  ];

  return (
    <div className='bg-white p-6 rounded-lg shadow space-y-6'>
      <h2 className='text-xl font-semibold'>Customers</h2>

      <table className='w-full border-collapse'>
        {customers.map(({ name, email, spent }, index) => (
          <tr
            key={index}
            className='border-b hover:bg-gray-50 transition text-gray-700'
          >
            <td className='p-3'>{name}</td>
            <td className='p-3'>{email}</td>
            <td className='p-3'>₹{spent}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Customers;
