# 💼 Web Development Projects

## TASK-1: 💰 Money Tracker Web App

A lightweight and responsive money tracker web application built using HTML, CSS, and JavaScript. It allows users to track their income and expenses, view a summary, and manage transactions — all stored locally using the browser’s `localStorage`.

---

### 🚀 Features

- ➕ Add income and expense transactions
- 📊 View total balance, income, and expenses
- ❌ Delete individual transactions
- 💾 Data persisted with `localStorage`
- 📱 Responsive design for mobile and desktop

---

### 🔧 Tech Stack

| Layer     | Technology             |
|-----------|------------------------|
| Frontend  | HTML, CSS, JavaScript  |
| Storage   | Browser LocalStorage   |

---

### 📁 Project Structure

money-tracker/
├── login.html # Login page
├── index.html # Main application page
├── style.css # Styling
└── script.js # Core logic

yaml
Copy
Edit

---

### 🛠️ Setup Instructions

1. Clone the Repository:

```bash
git clone https://github.com/<your-username>/money-tracker.git
cd money-tracker
Run the App:

Open index.html in a web browser by double-clicking it

Or use Live Server in VS Code

✨ How It Works
Enter a transaction title and amount

Click Add Transaction

View transactions with delete (❌) buttons

Balance, income, and expense values auto-update

Data is persisted in localStorage until manually cleared

📌 Future Enhancements
📅 Date-based filtering and sorting

📈 Monthly charts

☁️ Backend data sync

📤 Export to CSV or PDF

TASK-2: 📝 Dynamic Blogging Platform
A full-stack dynamic web application where users can sign up, create, edit, and delete blog posts. It supports user authentication, comment sections, and a responsive design for optimal viewing on any device.

🚀 Features
🔐 User Authentication (Register/Login/Logout)

📝 Create, Edit, and Delete Blog Posts

💬 Comment System

📱 Responsive UI using HTML/CSS

⚙️ RESTful API built with Express.js

💾 MongoDB Database Integration

🧰 Tech Stack
Layer	Technology
Frontend	HTML, CSS, JavaScript
Backend	Node.js, Express.js
Database	MongoDB + Mongoose
Authentication	bcrypt, express-session

📁 Project Structure
pgsql
Copy
Edit
blogging-platform/
├── backend/
│   ├── models/
│   │   ├── User.js
│   │   └── Post.js
│   ├── routes/
│   │   ├── auth.js
│   │   └── posts.js
│   └── server.js
├── frontend/
│   ├── index.html
│   ├── login.html
│   ├── register.html
│   ├── dashboard.html
│   └── style.css
├── package.json
└── README.md
🛠️ Setup Instructions
Clone the Repository:

bash
Copy
Edit
git clone https://github.com/<your-username>/blogging-platform.git
cd blogging-platform
Install Backend Dependencies:

bash
Copy
Edit
cd backend
npm install
Start MongoDB:

Ensure mongod is running

You can use MongoDB Compass or mongosh for DB interaction

Default URL: mongodb://localhost:27017/blogApp

Run the Backend Server:

bash
Copy
Edit
node server.js
The server runs on http://localhost:3000

Open the Frontend:

Open frontend/index.html in a browser

Or use Live Server for automatic reload

🔐 API Routes
Method	Route	Description
POST	/register	Register a new user
POST	/login	User login
POST	/logout	Logout current session
POST	/posts	Create a new blog post
GET	/posts	Retrieve all blog posts
PUT	/posts/:id	Edit a specific post
DELETE	/posts/:id	Delete a post

📌 Future Enhancements
🔐 Token-based JWT Authentication

✍️ Rich-text WYSIWYG editor

🏷️ Post tags and filtering

❤️ Like, share, bookmark functionality

🔧 Admin-only controls

👨‍💻 Author
K Soujanya

📄 License
This project is licensed under the MIT License.
