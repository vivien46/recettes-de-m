import { Pool } from "pg";

export const pool = new Pool({
  user: process.env.DATABASE_USER,
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_NAME,
    password: process.env.DATABASE_PASSWORD,
    port: parseInt( process.env.DATABASE_PORT || "5432", 10),
});

export const query = async (query: string, values: any[] = []) => {
  const client = await pool.connect();
  try {
    return await client.query(query, values);
    } finally {
        client.release();
        }
}