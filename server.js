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


// Contact form route (GET)
app.get('/contact', (req, res) => {
  res.send(`
    <h1>Contact Us</h1>
    <form action="/contact" method="POST">
      <label for="name">Name:</label>
      <input type="text" name="name" id="name" required><br><br>
      <label for="email">Email:</label>
      <input type="email" name="email" id="email" required><br><br>
      <label for="message">Message:</label><br>
      <textarea name="message" id="message" required></textarea><br><br>
      <button type="submit">Send</button>
    </form>
  `);
});

// Contact form route (POST)
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  res.send(`<h1>Thank you, ${name}!</h1><p>We have received your message: "${message}".</p><p>We will contact you at ${email}.</p>`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
