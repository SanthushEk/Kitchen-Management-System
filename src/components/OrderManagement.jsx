import React, { useState, useEffect } from 'react';

function OrderManagement() {
    const [orders, setOrders] = useState([]);
    const [orderId, setOrderId] = useState("");
    const [itemName, setItemName] = useState("");
    const [quantityOrdered, setQuantityOrdered] = useState(0);
    const [supplierName, setSupplierName] = useState("");
    const [orderDate, setOrderDate] = useState("");

    useEffect(() => {
        // Fetch orders data (replace with real API call)
        setOrders([
            { id: 1, item_name: 'Burger', quantity: 10, supplier: 'Supplier A', order_date: '2024-11-01', status: 'Pending' },
            { id: 2, item_name: 'Pizza', quantity: 5, supplier: 'Supplier B', order_date: '2024-11-02', status: 'In Progress' },
        ]);
    }, []);

    const addOrder = () => {
        // Add new order logic
        setOrders([
            ...orders, 
            { 
                id: orderId, 
                item_name: itemName,
                quantity: quantityOrdered, 
                supplier: supplierName,
                order_date: orderDate, 
                status: 'Pending' 
            }
        ]);

        // Clear input fields
        setOrderId("");
        setItemName("");
        setQuantityOrdered(0);
        setSupplierName("");
        setOrderDate("");
    };

    return (
        <div className="p-6 bg-blue-900 rounded-lg text-white">
            <h2 className="text-3xl font-bold text-center mb-6">Order Management</h2>

            <table className="w-full bg-blue-800 rounded-lg mb-6">
                <thead>
                    <tr>
                        <th className="p-3 text-left">Order ID</th>
                        <th className="p-3 text-left">Item Name</th>
                        <th className="p-3 text-left">Quantity Ordered</th>
                        <th className="p-3 text-left">Supplier Name</th>
                        <th className="p-3 text-left">Order Date</th>
                        <th className="p-3 text-left">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                        <tr key={order.id} className="border-b border-blue-600">
                            <td className="p-3">{order.id}</td>
                            <td className="p-3">{order.item_name}</td>
                            <td className="p-3">{order.quantity}</td>
                            <td className="p-3">{order.supplier}</td>
                            <td className="p-3">{order.order_date}</td>
                            <td className="p-3">{order.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="mt-6 flex flex-col sm:flex-row items-center">
                <input
                    type="text"
                    placeholder="Order ID"
                    value={orderId}
                    onChange={(e) => setOrderId(e.target.value)}
                    className="mr-4 p-2 mb-4 sm:mb-0 sm:w-1/5 bg-white text-black rounded focus:outline-none"
                />
                <input
                    type="text"
                    placeholder="Item Name"
                    value={itemName}
                    onChange={(e) => setItemName(e.target.value)}
                    className="mr-4 p-2 mb-4 sm:mb-0 sm:w-1/5 bg-white text-black rounded focus:outline-none"
                />
                <input
                    type="number"
                    placeholder="Quantity Ordered"
                    value={quantityOrdered}
                    onChange={(e) => setQuantityOrdered(e.target.value)}
                    className="mr-4 p-2 mb-4 sm:mb-0 sm:w-1/5 bg-white text-black rounded focus:outline-none"
                />
                <input
                    type="text"
                    placeholder="Supplier Name"
                    value={supplierName}
                    onChange={(e) => setSupplierName(e.target.value)}
                    className="mr-4 p-2 mb-4 sm:mb-0 sm:w-1/5 bg-white text-black rounded focus:outline-none"
                />
                <input
                    type="date"
                    placeholder="Order Date"
                    value={orderDate}
                    onChange={(e) => setOrderDate(e.target.value)}
                    className="mr-4 p-2 mb-4 sm:mb-0 sm:w-1/5 bg-white text-black rounded focus:outline-none"
                />
                <button
                    onClick={addOrder}
                    className="p-2 bg-blue-600 rounded hover:bg-blue-500 transition duration-200"
                >
                    Add Order
                </button>
            </div>
        </div>
    );
}

export default OrderManagement;
