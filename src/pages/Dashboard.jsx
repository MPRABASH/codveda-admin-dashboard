import React from "react";

const Dashboard = () => {
  const cards = [
    { title: "Total Sales", value: "₹1,24,500" },
    { title: "Orders", value: "3,480" },
    { title: "Customers", value: "1,120" },
    { title: "Pending", value: "54" },
  ];

  const bestProducts = [
    { name: "Headphones", sold: 870 },
    { name: "Smart Watch", sold: 650 },
    { name: "Speaker", sold: 540 },
    { name: "Gaming Mouse", sold: 430 },
  ];

  return (
    <div className='space-y-6'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
        {cards.map(({ title, value }, index) => (
          <div
            key={index}
            className='bg-white p-6 rounded-lg shadow hover:scale-[1.02] transition'
          >
            <p className='text-sm text-gray-500'>{title}</p>
            <h2 className='text-3xl font-semibold mt-1'>{value}</h2>
          </div>
        ))}
      </div>

      <div className='bg-white p-6 rounded-lg shadow'>
        <h2 className='text-lg font-semibold mb-4'>Best Selling Products</h2>

        <table className='w-full border-collapse'>
          {bestProducts.map(({ name, sold }, index) => (
            <tr
              key={index}
              className='border-b hover:bg-gray-50 transition text-gray-700'
            >
              <td className='p-3'>{name}</td>
              <td className='p-3 text-right font-semibold'>{sold} sold</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
