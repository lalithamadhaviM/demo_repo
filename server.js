const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, this is a collaborative GitHub project!');
});

// About page route
app.get('/about', (req, res) => {
  res.send('<h1>About Us</h1><p>This is the About page of our web application.</p>');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
