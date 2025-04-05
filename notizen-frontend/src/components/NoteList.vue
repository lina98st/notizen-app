<template>
<div class="note-list">
<h2>Gespeicherte Notizen</h2>
<div v-for="note in notes" :key="note.id" class="note">
<h3>{{ note.title }}</h3>
<p>{{ note.content }}</p>
<button @click="deleteNote(note.id)">Löschen</button>
</div>
</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue' 
import axios from 'axios'

//Notizen-Daten (Array) - leer zu Beginn
const notes = ref([])


// Notizen aus dem Backend mit axios laden
const fetchNotes = async () => {
const res = await axios.get('http://localhost:5001/api/notes')
notes.value = res.data

}

  //Eingabefelder löschen
const deleteNote = async (id: number) => {
await axios.delete(`http://localhost:5001/api/notes/${id}`)
await fetchNotes()
}
  // Eingabefelder bearbeiten

// Automatisch laden, wenn Komponente angezeigt wird
onMounted(() => {
  fetchNotes()
})

</script>

<style scoped>
.note-list {
  max-width: 600px;
  margin: 2rem auto;
  font-family: 'Segoe UI', sans-serif;
}

h2 {
  margin-bottom: 1.5rem;
  color: #374151;
  font-size: 1.5rem;
}

.note {
  background-color: #f0f4f8;
  border: 1px solid #d1d5db;
  padding: 1rem 1.5rem;
  border-radius: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
}

h3 {
  margin: 0 0 0.5rem;
  font-size: 1.2rem;
  color: #111827;
}

p {
  margin-bottom: 1rem;
  color: #4b5563;
}

button {
  background-color: #ef4444;
  color: white;
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 0.95rem;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

button:hover {
  background-color: #dc2626;
}
</style>
