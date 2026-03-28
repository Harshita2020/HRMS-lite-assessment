import React from "react";

const ViewAttendance = ({ attendance, employees }) => {
  const sortedAttendance =
    attendance.length > 0
      ? [...attendance].sort((a, b) => new Date(b.date) - new Date(a.date))
      : [];
  const employeeMap = employees.reduce((map, emp) => {
    map[emp.employeeId] = emp.name;
    return map;
  }, {});

  sortedAttendance.forEach((record) => {
    record.name = employeeMap[record.employeeId] || "Unknown";
  });
  const statusStyles = {
    Present: "bg-green-100 text-green-700",
    Absent: "bg-red-100 text-red-700",
    Leave: "bg-yellow-100 text-yellow-700",
  };

  return (
    <div className="w-full h-96 overflow-auto">
      {sortedAttendance && sortedAttendance.length > 0 ? (
        <table className="min-w-full h-full overflow-scroll">
          <thead>
            <tr className="sticky top-0 z-100 bg-blue-300">
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Date</th>
              <th className="py-2 px-4 border-b">Status</th>
            </tr>
          </thead>
          <tbody>
            {sortedAttendance.map((record) => (
              <tr key={record._id} className="border-b hover:bg-gray-50 transition">
                <td className="py-2 px-4 border-b">{record.employeeId}</td>
                <td className="py-2 px-4 border-b">{record.name}</td>
                <td className="py-2 px-4 border-b">
                  {new Date(record.date).toLocaleDateString()}
                </td>
                <td className="px-4 py-2">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${statusStyles[record.status]}`}
                  >
                    {record.status}
                  </span>
                </td>{" "}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center text-gray-500">
          No attendance records found.
        </p>
      )}
    </div>
  );
};

export default ViewAttendance;
