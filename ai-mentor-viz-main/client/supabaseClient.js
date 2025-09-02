// Get the createClient function from the global 'supabase' object
// that was created by the CDN script in your HTML.
// We use 'window.supabase' to be explicit and avoid the error.
const { createClient } = window.supabase;

// ---------------------------------------------------
// YOUR PROJECT URL AND ANON KEY ARE CORRECT
// ---------------------------------------------------
const supabaseUrl = 'https://szjsrevrkekycodxaamy.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN6anNyZXZya2VreWNvZHhhYW15Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY4MzYyNDAsImV4cCI6MjA3MjQxMjI0MH0.TlcGdljv2GjnZ322-W8XnMXQF9ROHasERN5Azwhuj3w';

// Create and export your own Supabase client, which your other scripts will import.
export const supabase = createClient(supabaseUrl, supabaseAnonKey);