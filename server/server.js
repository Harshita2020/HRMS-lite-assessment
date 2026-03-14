import express, { json } from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const employees = [
  {
    id: 1,
    name: "Harshita",
    age: 24,
    dept: "IT",
    salary: 180000,
    promote: true,
  },
  {
    id: 2,
    name: "Harshita",
    age: 24,
    dept: "IT",
    salary: 180000,
    promote: true,
  },

  {
    id: 3,
    name: "Harshita",
    age: 24,
    dept: "IT",
    salary: 180000,
    promote: true,
  },
  {
    id: 4,
    name: "Harshita",
    age: 24,
    dept: "IT",
    salary: 180000,
    promote: true,
  },
];

//GET
app.get("/employees", (req, res) => {
  res.json(employees);
});

//GET ONE
app.get("/employees/:id", (req, res) => {
  const id = Number(req.params.id);

  let found = employees.find((e) => e.id === id);
  console.log("FOUND- ", found);
  if (!found) {
    return res.status(404).json({ message: "404 Not Found!" });
  }
  return res.json(found);
});

//POST
app.post("/employees", (req, res) => {
  employees.push(req.body);
  res.json({ success: true });
});

//PUT
app.put("/employees/:id", (req, res) => {
  const id = Number(req.params.id);

  let index = employees.findIndex((e) => e.id === id);
  if (index === -1) {
    return res.status(404).json({ message: "404 not index!" });
  } else {
    let newEmp = { ...employees[index], ...req.body, id: id }; //do the magic here
    console.log("NEW EMP = ", newEmp);
    employees[index] = newEmp;
    res.send(newEmp);
  }
});

//DELETE
app.delete("/employees/:id", (req, res) => {
  const id = Number(req.params.id);

  let index = employees.findIndex((e) => e.id === id);
  console.log("index to delete- ", index);
  if (index === -1) {
    return res.status(404).json({ message: "404 not found!" });
  }

  employees.splice(index, 1);
  return res
    .status(200)
    .json({ message: "Employee record deleted successfully!" });
});

app.listen(3000, () => {
  console.log("Server running on port- 3000");
});
