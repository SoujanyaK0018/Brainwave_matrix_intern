# 💼 Web Development Projects

## 🧾 Table of Contents

- [Task 1: Money Tracker Web App](#task-1-money-tracker-web-app)
  - [Features](#features)
  - [Tech Stack](#tech-stack)
  - [Project Structure](#project-structure)
  - [Setup Instructions](#setup-instructions)
  - [How It Works](#how-it-works)
  - [Future Enhancements](#future-enhancements)
- [Task 2: Dynamic Blogging Platform](#task-2-dynamic-blogging-platform)
  - [Features](#features-1)
  - [Tech Stack](#tech-stack-1)
  - [Project Structure](#project-structure-1)
  - [Setup Instructions](#setup-instructions-1)
  - [API Routes](#api-routes)
  - [Future Enhancements](#future-enhancements-1)
- [Author](#author)
- [License](#license)

---

## 🧩 Task 1: 💰 Money Tracker Web App

A lightweight and responsive money tracker built using HTML, CSS, and JavaScript. It allows users to track their income and expenses locally using the browser’s `localStorage`.

### ✅ Features

- ➕ Add income and expense transactions
- 📊 View total balance, income, and expenses
- ❌ Delete individual transactions
- 💾 Data persisted using `localStorage`
- 📱 Responsive design for all devices

### 🧰 Tech Stack

| Layer     | Technology             |
|-----------|------------------------|
| Frontend  | HTML, CSS, JavaScript  |
| Storage   | Browser LocalStorage   |

### 🗂 Project Structure

money-tracker/
├── login.html # Login page (optional)
├── index.html # Main tracker UI
├── style.css # App styling
└── script.js # Core JavaScript logic

bash
Copy
Edit

### 🛠 Setup Instructions

1. **Clone the Repository**

```bash
git clone https://github.com/<your-username>/money-tracker.git
cd money-tracker
Run the App

Open index.html directly in your browser OR

Use Live Server extension in VS Code for real-time updates

✨ How It Works
Input transaction title and amount

Click "Add Transaction"

Transactions are listed and categorized as income/expense

Totals are updated automatically

Data is saved locally in your browser

📌 Future Enhancements
📅 Filter by date ranges

📈 Add monthly spending graphs

☁️ Optional backend sync

📤 Export reports (CSV/PDF)

🧩 Task 2: 📝 Dynamic Blogging Platform
A full-stack web app that enables users to register, log in, and manage blog posts dynamically. Built with MongoDB, Express, and Node.js (MERN-style backend).

✅ Features
🔐 User Authentication (Register/Login/Logout)

📝 Create, Edit, and Delete Blog Posts

💬 Comment System (optional)

📱 Responsive and clean UI

⚙️ RESTful backend API with Express.js

💾 MongoDB database integration with Mongoose

🧰 Tech Stack
Layer	Technology
Frontend	HTML, CSS, JavaScript
Backend	Node.js, Express.js
Database	MongoDB + Mongoose
Authentication	bcrypt, express-session

🗂 Project Structure
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
🛠 Setup Instructions
Clone the Repository

bash
Copy
Edit
git clone https://github.com/<your-username>/blogging-platform.git
cd blogging-platform
Install Backend Dependencies

bash
Copy
Edit
cd backend
npm install
Start MongoDB

Ensure mongod is running

You can use MongoDB Compass or mongosh to inspect collections

Default MongoDB URL: mongodb://localhost:27017/blogApp

Start the Backend Server

bash
Copy
Edit
node server.js
Server will run at: http://localhost:3000

Open the Frontend

Open frontend/index.html in a browser

Or launch with Live Server

📡 API Routes
Method	Route	Description
POST	/register	Register new user
POST	/login	Authenticate user
POST	/logout	End session
POST	/posts	Create blog post
GET	/posts	View all blog posts
PUT	/posts/:id	Update existing post
DELETE	/posts/:id	Delete a blog post

📌 Future Enhancements
🔑 Switch to JWT token authentication

✍️ Add WYSIWYG blog editor

🏷️ Tagging and filtering posts

❤️ Like, share, bookmark features

🛡️ Admin-only content moderation

👨‍💻 Author
K Soujanya

📄 License
This project is licensed under the MIT License.
