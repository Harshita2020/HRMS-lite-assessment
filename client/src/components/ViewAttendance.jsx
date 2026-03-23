import React from 'react'

const ViewAttendance = ({attendance}) => {
    console.log("Att data- ", attendance)
  return (
    <>
    <table className="min-w-full bg-white border border-gray-200">
      <thead>   
        <tr>
            <th className="py-2 px-4 border-b">Employee ID</th>
            <th className="py-2 px-4 border-b">Date</th>
            <th className="py-2 px-4 border-b">Status</th>
        </tr>
      </thead>
      <tbody>
        {attendance.map((record) => (
            <tr key={record._id}>   
                <td className="py-2 px-4 border-b">{record.employeeId}</td>
                <td className="py-2 px-4 border-b">{new Date(record.date).toLocaleDateString()}</td>
                <td className="py-2 px-4 border-b">{record.status}</td>
            </tr>
        ))} 
      </tbody>
      </table>
    </>
  )
}

export default ViewAttendance