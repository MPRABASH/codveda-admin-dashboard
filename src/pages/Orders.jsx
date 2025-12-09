import React from "react";

const Orders = () => {
  const orders = [
    {
      id: "00123",
      customer: "Alice Johnson",
      date: "12/01",
      status: "Completed",
    },
    { id: "00124", customer: "Bob Smith", date: "12/02", status: "Pending" },
    { id: "00125", customer: "Carol Davis", date: "12/03", status: "Shipped" },
    { id: "00126", customer: "David Lee", date: "12/04", status: "Cancelled" },
  ];

  return (
    <div className='bg-white p-6 rounded-lg shadow space-y-6'>
      <h2 className='text-xl font-semibold'>Orders</h2>

      <table className='w-full border-collapse'>
        {orders.map(({ id, customer, date, status }, index) => (
          <tr
            key={index}
            className='border-b hover:bg-gray-50 transition text-gray-700'
          >
            <td className='p-3'>{id}</td>
            <td className='p-3'>{customer}</td>
            <td className='p-3'>{date}</td>
            <td className='p-3'>{status}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Orders;
