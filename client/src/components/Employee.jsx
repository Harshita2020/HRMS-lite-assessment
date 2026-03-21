const Employee = ({ id, name, age, dept, salary, onDelete, onEdit, onMarkAttendance }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex flex-col transition hover:shadow-md">
      {/* Top Row */}
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
        <span className="text-green-600 font-semibold">₹{salary}</span>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 my-3"></div>

      {/* Bottom Row */}
      <div className="flex justify-between text-sm text-gray-500">
        <span>Dept: {dept}</span>
        <span>Age: {age}</span>
      </div>

      {/* Delete Button */}
      <div className="flex justify-between mt-5">
        <div>
          <button
            className="bg-green-500 hover:bg-green-600 text-white text-sm font-medium px-8 py-2.5 mr-2 rounded-lg transition w-fit cursor-pointer"
            onClick={onEdit}
          >
            Update
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium px-8 py-2.5 rounded-lg transition w-fit cursor-pointer"
            onClick={onMarkAttendance}
          >
            Mark Attendance
          </button>
        </div>
        <button
          className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium px-8 py-2.5 rounded-lg transition w-fit cursor-pointer"
          onClick={onDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Employee;
