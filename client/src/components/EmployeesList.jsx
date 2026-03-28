import { useState, useEffect } from "react";
import Employee from "./Employee";
import AddEmployeeForm from "./AddEmployeeForm";
import Modal from "./Modal";
import EditEmployeeForm from "./EditEmployeeForm";
import MarkAttendanceForm from "./MarkAttendanceForm";
// import { set } from "mongoose";
import ViewAttendance from "./ViewAttendance";

const EmployeesList = () => {
  const [data, setData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editForm, setEditForm] = useState(false);
  const [markAttendanceForm, setMarkAttendanceForm] = useState(false);
  const [employee, setEmployee] = useState({});
  const [attendanceData, setAttendanceData] = useState([]);
  const [showAttendanceTable, setShowAttendanceTable] = useState(false);

  console.log("DATA-- ? ", data)
  useEffect(() => {
    fetch("http://localhost:3000/employees")
      .then((res) => res.json())
      .then((d) => setData(d.data))
      .catch((err) => console.error("ERROR!!!", err));
  }, []);
  const fetchData = () => {
    fetch("http://localhost:3000/employees")
      .then((res) => res.json())
      .then((d) => setData(d.data))
      .catch((err) => console.error("ERROR!!!", err));
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:3000/employees/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setData((prev) => prev.filter((emp) => emp.employeeId !== id));
      }
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  const handleAdd = async (newEmployee) => {
    try {
      const res = await fetch("http://localhost:3000/employees", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEmployee),
      });

      if (res.ok) {
        setData((prev) => [...prev, newEmployee]);
        setShowForm(false);
        fetchData();
      }
    } catch (err) {
      console.error("Add failed", err);
    }
  };

  const handleUpdate = async (newEmployee) => {
    try {
      const id = employee.employeeId;
      const res = await fetch(`http://localhost:3000/employees/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEmployee),
      });
      const data = await res.json();
      if (res.ok) {
        setData((prev) =>
          prev.map((emp) => (emp.employeeId === id ? newEmployee : emp)),
        );
        setEditForm(false);
        console.log(data.message);
      }
    } catch (err) {
      console.error("Update failed", err);
    }
  };
  const putAttendance = async (newEmployee, id) => {
    try {
      const res = await fetch(`http://localhost:3000/attendance/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEmployee),
      });
      return res;
    } catch (err) {
      console.error("Marking attendance failed", err);
    }
  };
  const postAttendance = async (newEmployee) => {
    try {
      // const id = employee.employeeId;
      const res = await fetch(`http://localhost:3000/attendance`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEmployee),
      });
      return res;
    } catch (err) {
      console.error("Marking attendance failed", err);
    }
  };
  const handleMarkAttendance = async (attendanceData) => {
    try {
      console.log("ATT DATA- ", attendanceData);
      const id = employee.employeeId;
      let res = await postAttendance(attendanceData);
      if (!res.ok) {
        res = await putAttendance(attendanceData, id);
      }
      const data = await res.json();
      if (res.ok) {
        setAttendanceData((prev) => ({ ...prev, [id]: data.data }));
        setMarkAttendanceForm(false);
        console.log(data.message);
      }
    } catch (err) {
      console.error("Marking attendance failed", err);
    }
  };

  const handleEditForm = (_, d) => {
    setEditForm(true);
    setEmployee(d);
  };
  const handleShowForm = () => {
    setShowForm(true);
  };
  const handleViewAttendanceTable = () => {
    setShowAttendanceTable(true);
    handleViewAttendance();
  };
  const handleMarkAttendanceForm = (_, d) => {
    setMarkAttendanceForm(true);
    setEmployee(d);
  };
  const handleViewAttendance = () => {
    fetch("http://localhost:3000/attendance")
      .then((res) => res.json())
      .then((d) => setAttendanceData(d.data))
      .catch((err) => console.error("ERROR!!!", err));
  };

  const onClose = () => {
    setShowForm(false);
  };
  const onCloseEditForm = () => {
    setEditForm(false);
  };
  const onCloseMarkAttendanceForm = () => {
    setMarkAttendanceForm(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-3xl mx-auto px-4">
        {/* Header */}
        <h1 className="text-3xl font-bold text-blue-700 text-center mb-8">
          HRMS Dashboard
        </h1>

        {/* Add Button */}
        <div className="flex justify-left mb-2 space-x-4">
          <div className="flex justify-start mb-8">
            <button
              className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-lg shadow-sm transition cursor-pointer"
              onClick={handleShowForm}
            >
              Add Employee
            </button>
          </div>
          <div className="flex justify-start mb-8">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg shadow-sm transition cursor-pointer"
              onClick={handleViewAttendanceTable}
            >
              View Attendance
            </button>
          </div>
        </div>

        {/* Employee Cards OR Empty State */}
        {Array.isArray(data) && data.length > 0 ? (
          <div className="space-y-6">
            {data.map((d) => (
              <Employee
                key={d.employeeId}
                {...d}
                onDelete={() => handleDelete(d.employeeId)}
                onEdit={() => {
                  // handleUpdate(d.id);
                  handleEditForm(true, d);
                }}
                onMarkAttendance={() => {
                  handleMarkAttendanceForm(true, d);
                }}
              />
            ))}
          </div>
        ) : (
          <div className="mt-24 text-center text-gray-500 text-lg font-medium">
            <p>No employees yet.</p>
            <p className="text-gray-400 text-base mt-2">
              Add your first employee to get started!
            </p>
          </div>
        )}
      </div>
      {showForm && (
        <Modal heading="Add Employee" onClose={onClose}>
          {<AddEmployeeForm onAdd={handleAdd} length={data.length} />}
        </Modal>
      )}
      {editForm && (
        <Modal heading="Update Employee" onClose={onCloseEditForm}>
          {<EditEmployeeForm onEdit={handleUpdate} employee={employee} />}
        </Modal>
      )}
      {markAttendanceForm && (
        <Modal heading="Mark Attendance" onClose={onCloseMarkAttendanceForm}>
          {
            <MarkAttendanceForm
              onMarkAttendance={handleMarkAttendance}
              employee={employee}
            />
          }
        </Modal>
      )}
      {showAttendanceTable && (
        <Modal
          heading="Attendance Records"
          onClose={() => setShowAttendanceTable(false)}
        >
          <ViewAttendance attendance={attendanceData} employees={data}/>
        </Modal>
      )}
    </div>
  );
};

export default EmployeesList;
