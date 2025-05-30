// seed.js
const mongoose = require('mongoose');
const Post = require('./models/Post');

mongoose.connect('mongodb://localhost:27017/blogdemo').then(async () => {
  await Post.deleteMany({});
  await Post.insertMany([
    { title: 'Welcome!', content: 'This is the first blog post.' },
    { title: 'Second Post', content: 'This one is even better!' }
  ]);
  console.log('Sample posts inserted.');
  process.exit();
});
