import React from "react";

const ViewAttendance = ({ attendance }) => {
  console.log("Att data- ", attendance);
  const sortedDates = Object.keys(attendance)
    .filter((date) => attendance[date]?.length > 0) // skip empty
    .sort((a, b) => new Date(b) - new Date(a)); // latest first
  console.log("sortedDates--- ", sortedDates)
  return (
    <div>
      {sortedDates.map((date) => (
        <div key={date} style={{ marginBottom: "20px" }}>
          {/* Date Header */}
          <h3>📅 {date}</h3>

          {/* Table */}
          <table border="1" cellPadding="8" style={{ width: "100%" }}>
            <thead>
              <tr>
                <th>Employee ID</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {attendance[date].map((emp) => (
                <tr key={emp._id}>
                  <td>{emp.employeeId}</td>
                  <td>
                    {emp.status === "Present" && "🟢 Present"}
                    {emp.status === "Absent" && "🔴 Absent"}
                    {emp.status === "Leave" && "🟡 Leave"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
  // console.log("FILTERED!- ", filteredAttendanceByDate)
  // return (
  //   <>
  //     {filteredAttendanceByDate && filteredAttendanceByDate.length > 0 ?
  //     <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
  //       <thead>
  //         <tr>
  //           <th className="py-2 px-4 border-b">Employee ID</th>
  //           <th className="py-2 px-4 border-b">Date</th>
  //           <th className="py-2 px-4 border-b">Status</th>
  //         </tr>
  //       </thead>
  //       <tbody>
  //         {filteredAttendanceByDate.map((record) => (
  //           <tr key={record._id}>
  //             <td className="py-2 px-4 border-b">{record.employeeId}</td>
  //             <td className="py-2 px-4 border-b">
  //               {new Date(record.date).toLocaleDateString()}
  //             </td>
  //             <td className="py-2 px-4 border-b">{record.status}</td>
  //           </tr>
  //         ))}
  //       </tbody>
  //     </table> :
  //      <p className="text-center text-gray-500">No attendance records found.</p>}
  //   </>
  // );
};

export default ViewAttendance;
