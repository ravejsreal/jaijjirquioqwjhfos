const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'Meme Coins')));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/create', (req, res) => {
    res.sendFile(path.join(__dirname, 'create.html'));
});

// OAuth Endpoint (example for demo)
app.get('/auth', (req, res) => {
    // Redirect to OAuth page or perform authentication logic
    res.redirect('https://accounts.google.com/o/oauth2/auth?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=token&scope=email');
});

// Error handling for undefined routes
app.use((req, res) => {
    res.status(404).send('Page not found');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
