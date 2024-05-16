// pages/api/addEmployees.js
import { NextApiRequest, NextApiResponse } from 'next';
import EmployeeRepository from '../../EmployeeRepository';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const employeeRepo = new EmployeeRepository();
    
    try {
      const { employee_name, employee_role, employee_skill, employee_pay } = req.body;
      await employeeRepo.addEmployee(employee_name, employee_role, employee_skill, employee_pay);
      res.status(201).json({ success: true, message: 'Employee added successfully' });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).json({ success: false, error: 'Method not allowed' });
  }
}
