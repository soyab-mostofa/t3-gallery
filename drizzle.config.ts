import { defineConfig } from "drizzle-kit";
import { env } from "~/env";
export default defineConfig({
  schema: "./src/schema.ts",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString: env.POSTGRES_URL,
  },
});
