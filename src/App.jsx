import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBoxOpen, FaShoppingCart, FaUsers, FaChartLine, FaSignOutAlt } from 'react-icons/fa';
import inventoryImage from './assets/1.png';
import orderImage from './assets/2.png';
import staffImage from './assets/3.png';
import reportingImage from './assets/4.png';
import logoImage from './assets/OIP.png';
import InventoryManagement from './components/InventoryManagement';
import OrderManagement from './components/OrderManagement';
import StaffManagement from './components/StaffManagement';
import Reporting from './components/Reporting';

function App() {
  const [currentPage, setCurrentPage] = useState('inventory');
  const navigate = useNavigate();

  // Ensure the user is authenticated before allowing access to the main page
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (!user) {
      navigate('/login'); // Redirect to login page if not authenticated
    }
  }, [navigate]);

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('user'); // Remove user info from localStorage
    navigate('/login'); // Redirect to login page after logout
  };

  // Function to handle page switching
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="bg-blue-900 min-h-screen text-white flex flex-col items-center font-sans">
      {/* Header Section with Logo */}
      <header className="flex flex-col items-center justify-center mt-6 mb-10 animate-fadeIn">
        <img src={logoImage} alt="Logo" className="w-20 h-20 mb-4 rounded-full shadow-md" />
        <h1 className="text-4xl font-extrabold text-center text-shadow-lg">Kitchen Management System</h1>
      </header>

      {/* Logout Button */}
      <div className="absolute top-4 right-4">
        <button
          onClick={handleLogout}
          className="flex items-center bg-red-600 p-3 rounded-lg hover:bg-red-500 transition-all duration-200"
        >
          <FaSignOutAlt size={20} className="mr-2" />
          Logout
        </button>
      </div>

      {/* Navigation Section */}
      <nav className="grid grid-cols-2 gap-8 mb-10">
        <div className="flex flex-col items-center">
          <img src={inventoryImage} alt="Inventory" className="mb-4 hover:scale-105 transition-transform duration-200" />
          <button
            className="bg-blue-700 p-4 rounded-lg flex items-center justify-center space-x-3 hover:bg-blue-600 shadow-lg transform hover:scale-110 transition-all duration-300"
            onClick={() => handlePageChange('inventory')}
          >
            <FaBoxOpen size={24} />
            <span className="text-lg font-medium">Inventory</span>
          </button>
        </div>
        <div className="flex flex-col items-center">
          <img src={orderImage} alt="Orders" className="mb-4 hover:scale-105 transition-transform duration-200" />
          <button
            className="bg-blue-700 p-4 rounded-lg flex items-center justify-center space-x-3 hover:bg-blue-600 shadow-lg transform hover:scale-110 transition-all duration-300"
            onClick={() => handlePageChange('order')}
          >
            <FaShoppingCart size={24} />
            <span className="text-lg font-medium">Orders</span>
          </button>
        </div>
        <div className="flex flex-col items-center">
          <img src={staffImage} alt="Staff" className="mb-4 hover:scale-105 transition-transform duration-200" />
          <button
            className="bg-blue-700 p-4 rounded-lg flex items-center justify-center space-x-3 hover:bg-blue-600 shadow-lg transform hover:scale-110 transition-all duration-300"
            onClick={() => handlePageChange('staff')}
          >
            <FaUsers size={24} />
            <span className="text-lg font-medium">Staff</span>
          </button>
        </div>
        <div className="flex flex-col items-center">
          <img src={reportingImage} alt="Reporting" className="mb-4 hover:scale-105 transition-transform duration-200" />
          <button
            className="bg-blue-700 p-4 rounded-lg flex items-center justify-center space-x-3 hover:bg-blue-600 shadow-lg transform hover:scale-110 transition-all duration-300"
            onClick={() => handlePageChange('reporting')}
          >
            <FaChartLine size={24} />
            <span className="text-lg font-medium">Reporting</span>
          </button>
        </div>
      </nav>

      {/* Render current page content */}
      <div className="w-full max-w-4xl px-4">
        {currentPage === 'inventory' && <InventoryManagement />}
        {currentPage === 'order' && <OrderManagement />}
        {currentPage === 'staff' && <StaffManagement />}
        {currentPage === 'reporting' && <Reporting />}
      </div>
    </div>
  );
}

export default App;
