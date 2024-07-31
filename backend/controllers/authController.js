const User = require('../models/userModel.js');
const bcrypt = require('bcryptjs');
const { generateToken } = require('../middleware/authMiddleware');

// Sign-up handler
const signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();
    const token = generateToken(user);
    res.status(201).json({ token });
  } catch (error) {
    res.status(400).send('Error creating user');
  }
};

// Login handler
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email });
    
    if (!user) {
      return res.status(401).send('Invalid credentials'); // User not found
    }

    // Compare the password with the hashed password stored in the database
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).send('Invalid credentials'); // Password mismatch
    }

    // Generate a token if authentication is successful
    const token = generateToken(user);
    res.status(200).json({ token });
  } catch (error) {
    console.error('Error during login:', error); // Log the actual error
    res.status(500).send('Server error');
  }
};

module.exports = { signup, login };
