import React from "react";

const Products = () => {
  const products = [
    { name: "T-Shirt Blue", stock: 45, price: 29.99, status: "Active" },
    { name: "Jeans Black", stock: 12, price: 59.99, status: "Low Stock" },
    { name: "Sneakers", stock: 78, price: 89.99, status: "Active" },
    { name: "iPhone Case", stock: 3, price: 19.99, status: "Out" },
  ];

  return (
    <div className='bg-white p-6 rounded-lg shadow space-y-6'>
      <h2 className='text-xl font-semibold'>Products</h2>

      <table className='w-full border-collapse'>
        {products.map(({ name, stock, price, status }, index) => (
          <tr
            key={index}
            className='border-b hover:bg-gray-50 transition text-gray-700'
          >
            <td className='p-3'>{name}</td>
            <td className='p-3'>{stock}</td>
            <td className='p-3'>₹{price}</td>
            <td className='p-3'>{status}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Products;
