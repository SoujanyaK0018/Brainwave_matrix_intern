// server.js
const express = require('express');
const mongoose = require('mongoose');
const Post = require('./models/Post');
const app = express();

// Setup
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/blogdemo')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Routes
app.get('/', async (req, res) => {
  const posts = await Post.find().sort({ date: -1 });
  res.render('index', { posts }); // renders frontend with posts
});

app.get('/new', (req, res) => {
  res.render('new'); // form page
});

app.post('/create', async (req, res) => {
  const { title, content } = req.body;
  await Post.create({ title, content }); // save to MongoDB
  res.redirect('/');
});

// Start server
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
