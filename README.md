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

yaml
Copy
Edit

---

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

📸 Screenshots
Add screenshots of your app's UI here to make the README more visual.

📌 Future Enhancements
Token-based JWT Authentication

WYSIWYG (rich-text) blog editor

Tagging system and post filters

Like/share/bookmark features

Admin-only controls

👨‍💻 Author
Your Name

📄 License
This project is licensed under the MIT License.
