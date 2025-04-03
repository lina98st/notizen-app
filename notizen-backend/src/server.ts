import express, { Request, Response } from "express";
import mysql from "mysql2/promise";
import cors from "cors";
import dotenv from "dotenv";
import { Note } from "./types";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

// GET: Alle Notizen
app.get("/api/notes", async (req: Request, res: Response) => {
  const [rows] = await db.query("SELECT * FROM notes");
  res.json(rows);
});

// POST: Neue Notiz
app.post("/api/notes", async (req: Request, res: Response) => {
  const { title, content } = req.body;
  await db.query("INSERT INTO notes (title, content) VALUES (?, ?)", [title, content]);
  res.status(201).json({ message: "Notiz hinzugefügt" });
});

// DELETE: Notiz löschen
app.delete("/api/notes/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  await db.query("DELETE FROM notes WHERE id = ?", [id]);
  res.json({ message: "Notiz gelöscht" });
});

// Server starten
app.listen(5001, () => {
  console.log("🚀 Server läuft auf Port 5001");
});
