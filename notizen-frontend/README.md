# 📝 Notizen App

Ein Fullstack-Projekt mit:

- Vue 3 (Composition API, SFC, TypeScript)
- Express.js (REST API)
- MySQL (Datenbank)
- TypeScript (Frontend & Backend)

> Ziel: Eine einfache Notizen-App mit API-Anbindung und Datenbank.

---

## 📁 Projektstruktur

```bash
/notizen-app
├── notizen-frontend   # Vue 3 App (TypeScript, Vite)
└── notizen-backend    # Express.js API mit MySQL (TypeScript)
```

---

## ⚙️ Setup & Start

### 🔧 1. Projekt klonen

```bash
git clone https://github.com/lina98st/notizen-app
cd notizen-app
```

### 📦 2. Abhängigkeiten installieren

```bash
# Frontend:
cd notizen-frontend
npm install

# Backend:
cd ../notizen-backend
npm install
```

### ⚙️ 3. Datenbank einrichten

1. Starte MySQL (z. B. mit `brew services start mysql`)
2. Logge dich ein:

```bash
mysql -u root -p
```

3. Erstelle Datenbank & Tabelle:

```sql
CREATE DATABASE notizen_app;
USE notizen_app;

CREATE TABLE notes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255),
  content TEXT
);
```

### 🔑 4. .env Datei im Backend erstellen

Pfad: `notizen-backend/.env`

```env
DB_HOST=localhost
DB_USER=root
DB_PASS=
DB_NAME=notizen_app
```

### ▶️ 5. Backend starten

```bash
cd notizen-backend
npm run dev
```

Server läuft auf: `http://localhost:5001`

### 💻 6. Frontend starten

```bash
cd ../notizen-frontend
npm run dev
```

Frontend läuft auf: `http://localhost:5173`

---

## 🔗 API-Endpunkte (REST)

| Methode | Pfad           | Beschreibung         |
| ------- | -------------- | -------------------- |
| GET     | /api/notes     | Alle Notizen abrufen |
| POST    | /api/notes     | Neue Notiz speichern |
| DELETE  | /api/notes/:id | Notiz per ID löschen |

---

## 🛠️ Technologien

### Frontend

- Vue 3
- Vite
- TypeScript

### Backend

- Express.js
- MySQL
- TypeScript
- Dotenv
- CORS

---

## ✅ Status

- [x] Projektstruktur steht
- [x] Backend API funktioniert
- [x] MySQL angebunden
- [ ] Frontend verbunden
- [ ] Notizen erstellen & anzeigen im Browser

> Fortschritt: **Noch in Arbeit**
