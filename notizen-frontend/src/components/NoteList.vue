<template>
<div class="note-list">
<h2></h2>
<div v-for="note in notes"  :key"note-id" class="note">
<h3>{{ note.title }}<h3>
<p>{{ note.content }}</p>
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

// Automatisch laden, wenn Komponente angezeigt wird
onMounted(() => {
  fetchNotes()
})
</script>

<style scoped>
.note {
  border: 1px solid #ddd;
  padding: 1rem;
  margin: 0.5rem 0;
  border-radius: 8px;
  background-color: #fff8c4;
}
</style>
