import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import Employee from "./models/Employee.js";

dotenv.config();

const app = express();
const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

//GET

app.get("/employees", async (req, res) => {
  try {
    const employeess = await Employee.find();
    res.status(200).json({
      success: true,
      data: employeess,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch employees",
      error: error.message,
    });
  }
});

//GET ONE
app.get("/employees/:employeeId", async (req, res) => {
  const id = Number(req.params.employeeId);

  let found = await Employee.findOne({ employeeId: id });
  if (!found) {
    return res.status(404).json({ message: "404 Not Found!" });
  }
  return res.json(found);
});

//POST

app.post("/employees", async (req, res) => {
  try {
    const employee = new Employee(req.body);
    const savedEmployee = await employee.save();

    res.status(201).json({
      success: true,
      message: "Employee created successfully!",
      data: savedEmployee,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create employee",
      error: error.message,
    });
  }
});

// //PUT
app.put("/employees/:employeeId", async (req, res) => {
  const id = Number(req.params.employeeId);

  let updatedEmployeeData = await Employee.findOneAndUpdate(
    { employeeId: id },
    req.body,
    { returnDocument: "after" },
  );
  if (!updatedEmployeeData) {
    return res.status(404).json({ message: "404 not found!" });
  } else {
    return res
      .status(200)
      .json({ message: "Employee Data Updated Successfully!!" });
  }
});

// //DELETE
app.delete("/employees/:employeeId", async (req, res) => {
  const id = Number(req.params.employeeId);
  let deletedEmployeeData = await Employee.findOneAndDelete({ employeeId: id });

  if (!deletedEmployeeData) {
    return res.status(404).json({ message: "404 not found!" });
  } else {
    return res
      .status(200)
      .json({ message: "Employee record deleted successfully!" });
  }
});

startServer();
