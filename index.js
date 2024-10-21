const express = require('express');
const app = express();

// Create a simple route
app.get('/', (req, res) => {
  res.json({ message: 'Hello from Express API!' });
});

// Set the port to listen on (for local testing)
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});