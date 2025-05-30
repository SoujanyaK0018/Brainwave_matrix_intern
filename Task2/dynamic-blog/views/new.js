<!-- views/new.ejs -->
<!DOCTYPE html>
<html>
<head>
  <title>Create Post</title>
</head>
<body>
  <h1>Write a New Blog Post</h1>
  <form action="/create" method="POST">
    <input name="title" type="text" placeholder="Post Title" required /><br>
    <textarea name="content" placeholder="Your content here..." required></textarea><br>
    <button type="submit">Publish</button>
  </form>
</body>
</html>
