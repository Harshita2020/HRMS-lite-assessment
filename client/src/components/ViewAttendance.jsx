import React from "react";

const ViewAttendance = ({ attendance }) => {
  console.log("Att data- ", attendance);
  const filteredAttendanceByDate = attendance.length > 0 && attendance.reduce((acc, record) => {
    const date = new Date(record.date).toLocaleDateString() // Format date to a readable format
    if (!acc[date]) {
      acc[date] = [];
    } else {
      acc[date].push(record);
    } 
    return acc;
  }, {});
  console.log("FILTERED!- ", filteredAttendanceByDate)
  return (
    <>
      {filteredAttendanceByDate && filteredAttendanceByDate.length > 0 ? 
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Employee ID</th>
            <th className="py-2 px-4 border-b">Date</th>
            <th className="py-2 px-4 border-b">Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredAttendanceByDate.map((record) => (
            <tr key={record._id}>
              <td className="py-2 px-4 border-b">{record.employeeId}</td>
              <td className="py-2 px-4 border-b">
                {new Date(record.date).toLocaleDateString()}
              </td>
              <td className="py-2 px-4 border-b">{record.status}</td>
            </tr>
          ))}
        </tbody>
      </table> : 
       <p className="text-center text-gray-500">No attendance records found.</p>}
    </>
  );
};

export default ViewAttendance;
