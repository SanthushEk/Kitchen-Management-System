import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function InventoryManagement() {
  const [inventory, setInventory] = useState([]);
  const [item, setItem] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [unit, setUnit] = useState("");
  const [expiryDate, setExpiryDate] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch inventory data (replace with real API call)
    setInventory([
      { id: 1, item_name: 'Tomato', category: 'Vegetable', quantity: 50, unit: 'kg', expiry_date: '2024-12-31' },
      { id: 2, item_name: 'Potato', category: 'Vegetable', quantity: 30, unit: 'kg', expiry_date: '2024-11-30' },
    ]);
  }, []);

  const addItem = () => {
    // Add item logic (update database here)
    setInventory([...inventory, { 
      id: inventory.length + 1,
      item_name: item,
      category: category,
      quantity: Number(quantity),
      unit: unit,
      expiry_date: expiryDate 
    }]);

    // Clear input fields
    setItem("");
    setCategory("");
    setQuantity(0);
    setUnit("");
    setExpiryDate("");
  };

  return (
    <div className="p-6 bg-blue-900 rounded-lg text-white">
      <h2 className="text-3xl font-bold text-center mb-6">Inventory Management</h2>

      <table className="w-full bg-blue-800 rounded-lg">
        <thead>
          <tr>
            <th className="p-3 text-left">Item</th>
            <th className="p-3 text-left">Category</th>
            <th className="p-3 text-left">Quantity</th>
            <th className="p-3 text-left">Unit</th>
            <th className="p-3 text-left">Expiry Date</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((inv) => (
            <tr key={inv.id} className="border-b border-blue-600">
              <td className="p-3">{inv.item_name}</td>
              <td className="p-3">{inv.category}</td>
              <td className="p-3">{inv.quantity}</td>
              <td className="p-3">{inv.unit}</td>
              <td className="p-3">{inv.expiry_date}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-6 flex flex-col sm:flex-row items-center">
        <input
          type="text"
          placeholder="Item Name"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          className="mr-4 p-2 mb-4 sm:mb-0 sm:w-1/5 bg-white text-black rounded focus:outline-none"
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="mr-4 p-2 mb-4 sm:mb-0 sm:w-1/5 bg-white text-black rounded focus:outline-none"
        />
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="mr-4 p-2 mb-4 sm:mb-0 sm:w-1/5 bg-white text-black rounded focus:outline-none"
        />
        <input
          type="text"
          placeholder="Unit"
          value={unit}
          onChange={(e) => setUnit(e.target.value)}
          className="mr-4 p-2 mb-4 sm:mb-0 sm:w-1/5 bg-white text-black rounded focus:outline-none"
        />
        <input
          type="date"
          placeholder="Expiry Date"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
          className="mr-4 p-2 mb-4 sm:mb-0 sm:w-1/5 bg-white text-black rounded focus:outline-none"
        />
        <button
          onClick={addItem}
          className="p-2 bg-blue-600 rounded hover:bg-blue-500 transition duration-200"
        >
          Add Item
        </button>
      </div>
    </div>
  );
}

export default InventoryManagement;
