import React, { useState } from "react";

const AddEmployeeForm = ({ onAdd, length }) => {
  console.log("LENGTH??? ", length);
  const [formData, setFormData] = useState({
    employeeId: length ? length + 1 : 21,
    fullName: `Temp ${length ? length + 1 : 21}`,
    age: 14,
    department: "Employee",
    salary: 10000,
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEmployee = {
      employeeId: formData.employeeId,
      name: formData.fullName,
      age: Number(formData.age),
      salary: Number(formData.salary),
      dept: formData.department,
      email: `demo${formData.employeeId}@company.com`,
    };

    onAdd(newEmployee);

    setFormData({
      employeeId: length ? length + 1 : 11,
      fullName: "Temp",
      age: 14,
      department: "Employee",
      salary: 10000,
    });
  };

  return (
    <>
      <h4 className="mb-4 text-gray-600">
        Fill out the details below to add a new employee.
      </h4>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md"
            placeholder="Enter full name"
          />
        </div>
        <div>
          <label htmlFor="age" className="block text-sm font-medium">
            Age
          </label>
          <input
            type="number"
            id="age"
            value={formData.age}
            onChange={handleChange}
            min={0}
            max={100}
            required
            className="w-full p-2 border rounded-md"
            placeholder="Enter Age"
          />
        </div>

        <div>
          <label htmlFor="department" className="block text-sm font-medium">
            Department
          </label>
          <input
            type="text"
            id="department"
            value={formData.department}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md"
            placeholder="Enter Department"
          />
        </div>

        <div>
          <label htmlFor="salary" className="block text-sm font-medium">
            Salary
          </label>
          <input
            type="number"
            id="salary"
            value={formData.salary}
            onChange={handleChange}
            min={0}
            // max={100}
            required
            className="w-full p-2 border rounded-md"
            placeholder="Enter Salary"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-md font-semibold"
        >
          Add Employee
        </button>
      </form>
    </>
  );
};

export default AddEmployeeForm;
