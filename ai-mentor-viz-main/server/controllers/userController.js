// This is the function that will eventually handle user registration.
// For now, it just confirms that it was called.
export const registerUser = (req, res) => {
  res.status(201).json({ message: 'SUCCESS: The registerUser controller function was called!' });
};