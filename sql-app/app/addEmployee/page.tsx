"use client";
import React, { useState } from 'react';
import Navbar from '../components/navbar/navbar';

const AddEmployee = () => {
  const [formData, setFormData] = useState({
    employee_name: '',
    employee_role: '',
    employee_skill: '',
    employee_pay: '',
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const response = await fetch('/api/employees', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        employee_skill: formData.employee_skill.split(',').map(skill => skill.trim()),
      }),
    });
    if (response.ok) {
      alert('Employee added successfully');
    } else {
      alert('Error adding employee');
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center h-screen">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold mb-4">Add Employee</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="employee_name" className="block mb-1">Name:</label>
              <input
                type="text"
                id="employee_name"
                name="employee_name"
                value={formData.employee_name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>
            <div>
              <label htmlFor="employee_role" className="block mb-1">Role:</label>
              <input
                type="text"
                id="employee_role"
                name="employee_role"
                value={formData.employee_role}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>
            <div>
              <label htmlFor="employee_skill" className="block mb-1">Skills (comma separated):</label>
              <input
                type="text"
                id="employee_skill"
                name="employee_skill"
                value={formData.employee_skill}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>
            <div>
              <label htmlFor="employee_pay" className="block mb-1">Pay:</label>
              <input
                type="number"
                id="employee_pay"
                name="employee_pay"
                value={formData.employee_pay}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200">Add Employee</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
