import { neon } from '@neondatabase/serverless';

export const sql = neon(import.meta.env.NEON_DATABASE_URL);