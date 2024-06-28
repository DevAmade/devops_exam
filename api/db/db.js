const { Pool } = require('pg');

module.exports = new Pool({
  user: 'postgres',
  host: 'devops_exam_db',
  password: 'password',
  database: 'devops_exam_db',
  port: 5432,
});