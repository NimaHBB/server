import express from "express";
import path from "path";
import api from "./routes/api.js";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

// Serve the React static files after build

// Serve API
app.use("/api", api);

app.listen(port, () => console.log(`Listening on port ${port}`));
