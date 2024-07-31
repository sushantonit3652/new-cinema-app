const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

const authRoutes = require('./routes/authRoutes');
const { authenticateToken } = require('./middleware/authMiddleware');

dotenv.config();
const app = express();

// MongoDB connection
const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api/auth', authRoutes);

// Example of a protected route
app.get('/api/profile', authenticateToken, (req, res) => {
  res.send(`Hello ${req.user.name}`);
});

const port = process.env.PORT || 5500;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
