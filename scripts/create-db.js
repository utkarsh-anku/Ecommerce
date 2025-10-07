const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: 'root',
  database: 'postgres', // Connect to default database first
});

async function createDatabase() {
  try {
    await client.connect();
    console.log('Connected to PostgreSQL');

    // Check if database exists
    const res = await client.query(
      "SELECT 1 FROM pg_database WHERE datname = 'nestjs_boilerplate'",
    );

    if (res.rows.length === 0) {
      await client.query('CREATE DATABASE nestjs_boilerplate');
      console.log('Database "nestjs_boilerplate" created successfully');
    } else {
      console.log('Database "nestjs_boilerplate" already exists');
    }

    await client.end();
  } catch (err) {
    console.error('Error creating database:', err);
    process.exit(1);
  }
}

createDatabase();
