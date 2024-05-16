import { NextApiRequest, NextApiResponse } from 'next';
import EmployeeRepository from '../../EmployeeRepository';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'DELETE') {
    const employeeRepo = new EmployeeRepository();
    
    try {
      const { employee_id } = req.body;
      await employeeRepo.removeEmployee(employee_id);
      res.status(200).json({ success: true, message: 'Employee removed successfully' });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).json({ success: false, error: 'Method not allowed' });
  }
}
