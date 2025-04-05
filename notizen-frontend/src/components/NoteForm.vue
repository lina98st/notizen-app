<template>
  <div class="note-form">
    <form @submit.prevent="submitNote">
      <h2>Notiz Formular</h2>
      <input v-model="title" placeholder="title" />
      <textarea v-model="content" placeholder="Inhalt"></textarea>
      <button class="note-button" type="submit">Speichern</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'
import type { Note } from '../types' // oder './types' – je nach Pfad


const title = ref('')
const content = ref('')

const submitNote = async () => {
   const newNote:Note = {
    title: title.value,
    content: content.value,
   }

  await axios.post('http://localhost:5001/api/notes', newNote)
  //Eingabefelder leeren
  title.value = ''
  content.value = ''
}
</script>

<style scoped>
.note-form {
  max-width: 600px;
  margin: 2rem auto;
  background-color: #f9fafb;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  font-family: 'Segoe UI', sans-serif;
}

form {
  display: flex;
  flex-direction: column;
}

h2 {
  margin-bottom: 1.5rem;
  color: #374151;
  font-size: 1.5rem;
}

input,
textarea {
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 1rem;
}

input:focus,
textarea:focus {
  border-color: #4f46e5;
  outline: none;
}

.note-button {
  background-color: #4f46e5;
  color: white;
  border: none;
  border-radius: 0.5rem;
  padding: 0.75rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.note-button:hover {
  background-color: #4338ca;
}
</style>

