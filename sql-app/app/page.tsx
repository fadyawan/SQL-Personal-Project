"use client";

import React from 'react';
import EmployeeTable from './components/table/table';
import Navbar from './components/navbar/navbar';

export default function Home() {
  return (
    <div className=''>
      <Navbar />
      <div className='p-16'>
        <h1>Employee Management System</h1>
        <div className='p-16'>
          <EmployeeTable />
        </div>
      </div>
    </div>
  );
}
