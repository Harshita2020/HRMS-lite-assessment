import React from "react";
import { useState, useEffect } from "react";

const MarkAttendanceForm = ({ onMarkAttendance, employee }) => {
  console.log("onMarkAttendance", onMarkAttendance);
  console.log("employee", employee);

  const [formData, setFormData] = useState({
    date: new Date().toISOString().split("T")[0], // Default to today's date
    status: "Present",
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
    const attendanceRecord = {
      employeeId: employee.employeeId,
      date: formData.date,
      status: formData.status,
    };
    onMarkAttendance(attendanceRecord);
    setFormData({
      date: formData.date,
      status: formData.status,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="fullName" className="">
          Full Name
        </label>
        <input
          type="text"
          id="fullName"
          value={employee.name}
          disabled
          className="w-full p-2 border rounded-md bg-gray-100"
        />
      </div>
      <div>
        <label htmlFor="date" className="">
          Date
        </label>
        <input
          type="date"
          id="date"
          value={formData.date}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded-md bg-gray-100"
        />
      </div>
      <div>
        <label htmlFor="status" className="">
          Full Name
        </label>
        <select
          id="status"
          value={formData.status}
          onChange={handleChange}
          className="w-full p-2 border rounded-md bg-gray-100"
        >
          <option value="Present">Present</option>
          <option value="Absent">Absent</option>
          <option value="Leave">Leave</option>
        </select>
      </div>
      <div>
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-lg shadow-sm transition cursor-pointer mt-4"
        >
          Mark Attendance
        </button>
      </div>
    </form>
  );
};

export default MarkAttendanceForm;
