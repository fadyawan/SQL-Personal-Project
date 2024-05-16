"use client";

import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
    {   field: 'id', 
    headerName: 'ID', 
    width: 50 },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 200,
        valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
    },
    {   field: 'firstName', 
        headerName: 'First name', 
        width: 150 },
    {   field: 'lastName',
        headerName: 'Last name', 
        width: 150 },
    {
        field: 'employeeRole',
        headerName: 'Employee Role',
        width: 150,
    },
    {
        field: 'employeeSkill',
        headerName: 'Employee Skill',
        type: 'string',
        width: 150,
    },
    {
        field: 'employeePay',
        headerName: 'Employee Pay',
        type: 'number',
        width: 150,
    },
];

const employeeData = [
    { id: 1, lastName: 'French', firstName: 'Mavis', age: 35, employeeRole: 'Project Manager', employeeSkill: 'Managerial Skill', employeePay: '£55,000' },
    { id: 2, lastName: 'Call', firstName: 'Madelyn', age: 42, employeeRole: 'Software Engineer', employeeSkill: 'Technical Skill', employeePay: '£30,000'  },
    { id: 3, lastName: 'Hayes', firstName: 'Kora', age: 45, employeeRole: 'Accountant', employeeSkill: 'Technical Skill', employeePay: '£45,000'  },
];

export default function EmployeeTable() {
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={employeeData}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
            />
        </div>
    );
}