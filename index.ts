// index.ts
// * responsible for setting up the database connection 

import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { DATABASE_URL } from './config';

const db = drizzle(neon(DATABASE_URL as string));
export default db;