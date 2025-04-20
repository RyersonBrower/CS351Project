# 📊 CFG Database Login & Reporting System

A simple full-stack web application that allows representatives to log in and generate order reports for customers using a MySQL database.

---

## 🔧 Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js (Express)
- **Database**: MySQL
- **Other**: CORS, Body-Parser

---

## 🖼️ Project Overview

This project provides:

- ✅ Login system for sales reps
- ✅ Order report generation by customer
- ✅ Dynamic dropdown populated from the database
- ✅ Modal-based UI for reports

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
2. Install Dependencies
bash
Copy
Edit
npm install express mysql2 body-parser cors
3. Configure MySQL Database
Start your MySQL server.

Import the CFG.sql file into MySQL using a tool like MySQL Workbench or via terminal:

bash
Copy
Edit
mysql -u root -p < CFG.sql
Make sure the credentials in server.js match your setup:

js
Copy
Edit
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "your_password",  // 🔒 Replace with your MySQL password
    database: "CFG"
});
4. Run the Backend
bash
Copy
Edit
node server.js
The server will run at: http://localhost:3000

5. Open the Frontend
Open loginIndex.html in your browser (double-click or right-click → "Open with browser").

⚠️ If you're accessing via file://, you may need to disable CORS for testing using a browser extension (like Allow CORS).

🧪 Default Login Credentials
Use the following format to log in:

Username: FirstName LastName (e.g., Rafael Campos)

Password: password123

🛡️ Security Notes
This project is for learning/demo purposes:

Passwords are in plain text

No authentication/session handling yet

For production, consider:

Password hashing (e.g., bcrypt)

JWT/session authentication

Input validation and sanitation

📂 File Overview
bash
Copy
Edit
project/
│
├── loginIndex.html       # Login page UI
├── mainIndex.html        # Dashboard after login
├── loginScript.js        # Login logic
├── mainScript.js         # Report & modal logic
├── loginStyles.css       # Styling for login page
├── mainStyles.css        # Styling for main page
├── server.js             # Express server
├── CFG.sql               # Database schema + data
└── README.md             # Project documentation
