"use client";
import Navbar from '../components/navbar/navbar';

const RemoveEmployee = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center h-screen">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold mb-4">Remove Employee</h1>
          <form className="space-y-4">
            <div>
              <label htmlFor="employee_id" className="block mb-1">Employee ID:</label>
              <input
                type="number"
                id="employee_id"
                name="employee_id"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>
            <button type="submit" className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-200">Remove Employee</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RemoveEmployee;
