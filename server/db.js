import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: "localhost",
  port: 3308,
  user: "root",
  password: "",
  database: "gestion_documentos",
});
