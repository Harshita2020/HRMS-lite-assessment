# HRMS Mini -- MERN Practice Project

## 📌 Project Summary

HRMS Mini is a simple full-stack Employee Management system built using
MERN stack fundamentals (without MongoDB for now --- in-memory storage
for learning).

The goal of this project is to practice:

-   REST API design using Express
-   Connecting React frontend to backend
-   Handling CRUD operations
-   Understanding props, component structure, and data flow
-   Practicing real-world engineering habits (separation of concerns,
    commits, structure)

This project focuses on strengthening core full-stack fundamentals
before scaling complexity.

------------------------------------------------------------------------

## 🛠 Tech Stack

### Frontend

-   React (Vite)
-   Functional components
-   useState, useEffect
-   Fetch API

### Backend

-   Node.js
-   Express
-   REST APIs
-   In-memory data storage
-   CORS handling

------------------------------------------------------------------------

## 🚀 Features Implemented

### Backend

-   GET `/employees` → Fetch all employees
-   GET `/employees/:id` → Fetch single employee
-   POST `/employee` → Add new employee
-   PUT `/employees/:id` → Update employee (WIP logic)
-   DELETE `/employees/:id` → Delete employee

### Frontend

-   Fetch employee list from backend
-   Render employees dynamically using `.map()`
-   Reusable `Employee` component
-   Props spreading (`{...d}` pattern)
-   Proper `key` usage for list rendering

------------------------------------------------------------------------

## 🖥 UI Overview

The UI is intentionally minimal and functional.

### Structure:

-   Main App component
-   Employee component (reusable card-like structure)

### Flow:

1.  On component mount, `useEffect` triggers API call.
2.  Data is stored in state (`useState`).
3.  Employees are rendered dynamically.
4.  Each employee displays:
    -   Name
    -   Age
    -   Department
    -   Salary

The UI currently focuses on: - Data flow clarity - Clean component
separation - Backend integration correctness

Styling is minimal because the primary goal is architecture and data
handling.

------------------------------------------------------------------------

## 📦 How to Run

### Backend

    npm install
    node server.js

Runs on: http://localhost:3000

### Frontend

    npm install
    npm run dev

Runs on: http://localhost:5173

Make sure backend runs before frontend.

------------------------------------------------------------------------

## 🔮 Next Improvements

-   Add MongoDB (replace in-memory array)
-   Add proper PUT update logic
-   Add form to create employees from UI
-   Add loading & error states
-   Add basic styling (Tailwind or CSS modules)
-   Add environment variables
-   Add folder structuring for scalability

------------------------------------------------------------------------

## 🧠 What This Project Demonstrates

-   Ability to design and consume REST APIs
-   Understanding of React lifecycle via `useEffect`
-   Handling asynchronous operations
-   State management basics
-   Component-driven architecture
-   Debugging and iterative improvement
