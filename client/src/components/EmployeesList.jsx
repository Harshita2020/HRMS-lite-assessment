import { useState, useEffect } from "react";
import Employee from "./Employee";
import AddEmployeeForm from "./AddEmployeeForm";
import Modal from "./Modal";
import EditEmployeeForm from "./EditEmployeeForm";

const EmployeesList = () => {
  const [data, setData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editForm, setEditForm] = useState(false);
  const [employee, setEmployee] = useState({});

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
        console.log(data.message)
      }
    } catch (err) {
      console.error("Update failed", err);
    }
  };

  const handleEditForm = (_, d) => {
    setEditForm(true);
    setEmployee(d);
  };
  const handleShowForm = () => {
    setShowForm(true);
  };

  const onClose = () => {
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-3xl mx-auto px-4">
        {/* Header */}
        <h1 className="text-3xl font-bold text-blue-700 text-center mb-8">
          HRMS Dashboard
        </h1>

        {/* Add Button */}
        <div className="flex justify-start mb-8">
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-lg shadow-sm transition cursor-pointer"
            onClick={handleShowForm}
          >
            Add Employee
          </button>
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
        <Modal heading="Update Employee" onClose={onClose}>
          {<EditEmployeeForm onEdit={handleUpdate} employee={employee} />}
        </Modal>
      )}
    </div>
  );
};

export default EmployeesList;
