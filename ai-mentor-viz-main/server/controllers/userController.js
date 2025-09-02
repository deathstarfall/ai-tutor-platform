import pool from '../db.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// --- User Registration Logic ---
export const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const userExists = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (userExists.rows.length > 0) {
      return res.status(400).json({ message: 'User with this email already exists.' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await pool.query(
      'INSERT INTO users (username, email, password_hash) VALUES ($1, $2, $3) RETURNING id, username, email',
      [username, email, hashedPassword]
    );

    res.status(201).json(newUser.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// --- User Login Logic ---
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user in the database by their email
    const user = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (user.rows.length === 0) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Compare the submitted password with the hashed password stored in the database
    const isMatch = await bcrypt.compare(password, user.rows[0].password_hash);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // If passwords match, create a payload for the JWT
    const payload = {
      user: {
        id: user.rows[0].id,
      },
    };

    // Sign the token, creating the "digital key"
    const token = jwt.sign(
      payload,
      'yourSecretKeyGoesHere', // Replace with a strong secret key
      { expiresIn: '1h' }
    );
    
    // Send the token back to the user
    res.json({ token });

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};