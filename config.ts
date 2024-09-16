// config.ts
import { config } from 'dotenv';
config(); // load env variables

export const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
    throw new Error("DATABASE_URL is not defined in the environment variables.");
}
