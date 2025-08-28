const signupForm = document.getElementById('signup-form');

signupForm.addEventListener('submit', async (event) => {
  // Prevent the page from reloading
  event.preventDefault();

  // Get the data from the form inputs
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // This is the fetch() call that sends the data to Aditya's server
  try {
    const response = await fetch('http://localhost:3001/api/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    console.log('Success! Data sent to server:', data);
    alert('You have successfully registered!');

  } catch (error) {
    console.error('Error:', error);
    alert(`Registration failed: ${error.message}`);
  }
});