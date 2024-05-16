const connection = require('./lib/db');

class EmployeeRepository {
  addEmployee(employee_name: any, employee_role: any, employee_skill: any, employee_pay: any) {
    return new Promise((resolve, reject) => {
      const sql = 'INSERT INTO employees (employee_name, employee_role, employee_skill, employee_pay) VALUES (?, ?, ?, ?)';
      connection.query(sql, [employee_name, employee_role, employee_skill, employee_pay], (error: any, results: unknown) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(results);
      });
    });
  }

  removeEmployee(employee_id: any) {
    return new Promise((resolve, reject) => {
      const sql = 'DELETE FROM employees WHERE employee_id = ?';
      connection.query(sql, [employee_id], (error: any, results: unknown) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(results);
      });
    });
  }

}

module.exports = EmployeeRepository;
