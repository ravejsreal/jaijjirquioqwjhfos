const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'Meme Coins')));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Meme Coins', 'index.html'));
});

app.get('/create', (req, res) => {
    res.sendFile(path.join(__dirname, 'Meme Coins', 'create.html'));
});

// OAuth redirect handler (optional, but helps testing)
app.get('/auth/callback', (req, res) => {
    res.send('OAuth Callback Received'); // Debugging purposes
});

// Catch-all for 404
app.use((req, res) => {
    res.status(404).send('Page not found');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
