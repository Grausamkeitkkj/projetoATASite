const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'site_ata',
  password: '',
  port: 5432, // Porta padrão do PostgreSQL
});

module.exports = pool;
