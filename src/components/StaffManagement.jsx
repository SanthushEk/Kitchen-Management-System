import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function StaffManagement() {
  const [staff, setStaff] = useState([]);
  const [staffId, setStaffId] = useState("");
  const [fullName, setFullName] = useState("");
  const [role, setRole] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [hireDate, setHireDate] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setStaff([
      { id: 1, name: 'Alice', role: 'Chef', contact: 'alice@example.com', hire_date: '2023-01-01' },
      { id: 2, name: 'Bob', role: 'Waiter', contact: 'bob@example.com', hire_date: '2022-05-12' },
    ]);
  }, []);

  const addStaffMember = () => {
    setStaff([
      ...staff,
      {
        id: staffId,
        name: fullName,
        role: role,
        contact: contactInfo,
        hire_date: hireDate,
      },
    ]);

    setStaffId("");
    setFullName("");
    setRole("");
    setContactInfo("");
    setHireDate("");
  };

  return (
    <div className="p-6 bg-blue-900 rounded-lg text-white">
      <h2 className="text-3xl font-bold text-center mb-6">Staff Management</h2>
    
      <table className="w-full bg-blue-800 rounded-lg mb-6">
        <thead>
          <tr>
            <th className="p-3 text-left">Staff ID</th>
            <th className="p-3 text-left">Full Name</th>
            <th className="p-3 text-left">Position/Role</th>
            <th className="p-3 text-left">Contact Information</th>
            <th className="p-3 text-left">Hire Date</th>
          </tr>
        </thead>
        <tbody>
          {staff.map((member) => (
            <tr key={member.id} className="border-b border-blue-600">
              <td className="p-3">{member.id}</td>
              <td className="p-3">{member.name}</td>
              <td className="p-3">{member.role}</td>
              <td className="p-3">{member.contact}</td>
              <td className="p-3">{member.hire_date}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-6 flex flex-col sm:flex-row items-center">
        <input
          type="text"
          placeholder="Staff ID"
          value={staffId}
          onChange={(e) => setStaffId(e.target.value)}
          className="mr-4 p-2 mb-4 sm:mb-0 sm:w-1/5 bg-white text-black rounded focus:outline-none"
        />
        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="mr-4 p-2 mb-4 sm:mb-0 sm:w-1/5 bg-white text-black rounded focus:outline-none"
        />
        <input
          type="text"
          placeholder="Position/Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="mr-4 p-2 mb-4 sm:mb-0 sm:w-1/5 bg-white text-black rounded focus:outline-none"
        />
        <input
          type="text"
          placeholder="Contact Information"
          value={contactInfo}
          onChange={(e) => setContactInfo(e.target.value)}
          className="mr-4 p-2 mb-4 sm:mb-0 sm:w-1/5 bg-white text-black rounded focus:outline-none"
        />
        <input
          type="date"
          placeholder="Hire Date"
          value={hireDate}
          onChange={(e) => setHireDate(e.target.value)}
          className="mr-4 p-2 mb-4 sm:mb-0 sm:w-1/5 bg-white text-black rounded focus:outline-none"
        />
        <button
          onClick={addStaffMember}
          className="p-2 bg-blue-600 rounded hover:bg-blue-500 transition duration-200"
        >
          Add Staff Member
        </button>
      </div>
    </div>
  );
}

export default StaffManagement;
