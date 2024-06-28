const { Pool } = require('pg');

module.exports = new Pool({
  user: 'postgres',
  host: 'devops1_db',
  password: 'password_test',
  database: 'database_test',
  port: 5432,
});