# HRMS Lite (MERN Stack)

## 📌 Project Overview

HRMS Lite is a simple Human Resource Management System built using the MERN stack.
It allows users to perform basic employee management operations such as creating, viewing, updating, and deleting employee records.

The project demonstrates integration between a React frontend and a Node.js/Express backend with MongoDB for persistent data storage.

---

## 🛠️ Tech Stack Used

**Frontend**

* React
* JavaScript (ES6+)
* Fetch API

**Backend**

* Node.js
* Express.js

**Database**

* MongoDB Atlas
* Mongoose ODM

---

## ⚙️ Steps to Run the Project Locally

### 1. Clone the Repository

```
git clone <your-repo-link>
cd HRMS-lite-assessment
```

---

### 2. Setup Backend

```
cd server
npm install
```

Create a `.env` file inside the `server` folder and add:

```
MONGO_URI=your_mongodb_connection_string
PORT=3000
```

Start the backend server:

```
npm run dev
```

---

### 3. Setup Frontend

```
cd client
npm install
npm start
```

The frontend will run on:

```
http://localhost:3000 (or 5173 depending on setup)
```

---

## 🔗 API Endpoints

| Method | Endpoint               | Description             |
| ------ | ---------------------- | ----------------------- |
| GET    | /employees             | Fetch all employees     |
| GET    | /employees/:id         | Fetch a single employee |
| POST   | /employees             | Create a new employee   |
| PUT    | /employees/:employeeId | Update an employee      |
| DELETE | /employees/:employeeId | Delete an employee      |

---

## ⚠️ Assumptions / Limitations

* No authentication or authorization is implemented
* Input validation is minimal and can be improved
* No pagination or filtering for employee list
* Uses `employeeId` as a custom identifier instead of MongoDB `_id`
* Error handling is basic and can be enhanced
* Frontend UI is kept simple for functionality focus

---
