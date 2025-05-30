TASK-1
# 💰 Money Tracker Web App

A lightweight and responsive money tracker web application built using HTML, CSS, and JavaScript. It allows users to track their income and expenses, view a summary, and manage transactions — all stored locally using the browser’s `localStorage`.

---

## 🚀 Features

- ➕ Add income and expense transactions
- 📊 View total balance, income, and expenses
- ❌ Delete individual transactions
- 💾 Data persisted with `localStorage`
- 📱 Responsive design for mobile and desktop

---

## 🔧 Tech Stack

| Layer     | Technology       |
|----------|------------------|
| Frontend | HTML, CSS, JavaScript |
| Storage  | Browser LocalStorage |

---

## 📁 Project Structure

money-tracker/
lLogin.html #For login page
├── index.html # Main HTML file
├── style.css # CSS for styling
└── script.js # JavaScript functionality


## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/<your-username>/money-tracker.git
cd money-tracker
2. Run the App
Open the app by launching index.html in your web browser:

Double-click index.html, or

Use VS Code’s Live Server extension




✨ How It Works
Enter a transaction title and amount

Click Add Transaction

Transactions appear in a list with a delete (❌) button

The app calculates and updates:

Total Balance

Total Income

Total Expenses

Data remains stored in browser until cleared

📌 Future Enhancements
📅 Date-based filtering and sorting

📈 Monthly charts (income vs. expenses)

☁️ Backend sync with user accounts

📤 Export to CSV or PDF

TASK-2

# 📝 Dynamic Blogging Platform

A full-stack dynamic web application where users can sign up, create, edit, and delete blog posts. It supports user authentication, comment sections, and a responsive design for optimal viewing on any device.

---

## 🚀 Features

- 🔐 User Authentication (Register/Login/Logout)
- 📝 Create, Edit, and Delete Blog Posts
- 💬 Comment System
- 📱 Responsive UI using HTML/CSS
- ⚙️ RESTful API built with Express.js
- 💾 MongoDB Database Integration

---

## 🧰 Tech Stack

| Layer        | Technology           |
|-------------|----------------------|
| Frontend     | HTML, CSS, JavaScript |
| Backend      | Node.js, Express.js   |
| Database     | MongoDB + Mongoose   |
| Authentication | bcrypt, express-session |

---

## 📁 Project Structure

blogging-platform/
├── backend/
│ ├── models/
│ │ ├── User.js
│ │ └── Post.js
│ ├── routes/
│ │ ├── auth.js
│ │ └── posts.js
│ └── server.js
├── frontend/
│ ├── index.html
│ ├── login.html
│ ├── register.html
│ ├── dashboard.html
│ └── style.css
├── README.md
└── package.json

## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/blogging-platform.git
cd blogging-platform
2. Install Backend Dependencies
bash
Copy
Edit
cd backend
npm install
3. Start MongoDB
Make sure mongod is running. Use MongoDB Compass or mongosh to view the data.

Default MongoDB URL: mongodb://localhost:27017/blogApp

4. Run the Backend Server
bash
Copy
Edit
node server.js
The server will run at: http://localhost:3000

5. Open the Frontend
Open frontend/index.html in a browser.
You can also use the Live Server extension in VS Code for auto-refresh.

🔐 Default Routes
Method	Route	Description
POST	/register	Register a new user
POST	/login	Login with credentials
POST	/logout	Logout current session
POST	/posts	Create a blog post
GET	/posts	View all blog posts
PUT	/posts/:id	Edit a blog post
DELETE	/posts/:id	Delete a blog post

📌 Future Enhancements
Token-based JWT Authentication

WYSIWYG (rich-text) blog editor

Tagging system and post filters

Like/share/bookmark features

Admin-only controls

👨‍💻 Author
K Soujanya

📄 License
This project is licensed under the MIT License.
