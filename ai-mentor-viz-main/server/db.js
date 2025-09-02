import pg from 'pg';

// This "pool" will manage connections to your database
const pool = new pg.Pool({
  user: 'postgres',          // Your PostgreSQL username
  host: 'localhost',
  database: 'test_db',   // The database name Ayansh created
  password: 'testpswd1234', // Your PostgreSQL password
  port: 5432,
});

export default pool;