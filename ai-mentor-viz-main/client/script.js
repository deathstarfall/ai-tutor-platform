import { supabase } from './supabaseClient.js'; // 1. Import the Supabase client

const signupForm = document.getElementById('signup-form');

signupForm.addEventListener('submit', async (event) => {
  // Prevent the page from reloading
  event.preventDefault();

  // Get the data from the form inputs
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // 2. Use the simple Supabase signUp function instead of fetch
  try {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          username: username, // This sends the username to your 'profiles' table trigger
        },
      },
    });

    // 3. Supabase handles errors for you
    if (error) {
      throw error; // If there's an error, throw it to the catch block
    }

    // 4. Handle the success case
    console.log('Signup successful!', data);
    alert('Success! Please check your email to verify your account.');

  } catch (error) {
    console.error('Error signing up:', error);
    alert(`Registration failed: ${error.message}`);
  }
});