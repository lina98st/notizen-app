export interface Note {
    id?: number;    // Optional, da MySQL automatisch eine ID erstellt
    title: string;  // Titel der Notiz (Pflichtfeld)
    content: string; // Inhalt der Notiz (Pflichtfeld)
  }
  