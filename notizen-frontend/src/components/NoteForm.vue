<template>
  <div class="note-form">
    <form @submit.prevent="submitNote">
      <h2>Notiz Formular</h2>
      <input v-model="titel" placeholder="title" />
      <textarea v-model="content" placeholder="Inhalt"></textarea>
      <button class="note-button" type="submit">Speichern</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const title = ref('')
const content = ref('')

const submitNote = () => {
  console.log('Gespeichert:', title.value, content.value)
  //Eingabefelder leeren
  title.value = ''
  content.value = ''
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  margin: 3rem;
  max-width: 500px;
  margin: 0 auto; /* zentriert das Formular */
  background-color: #ffe0e0;
  padding: 2rem;
  border-radius: 1rem;
}

.note-button {
  background-color: #ffb347;
  color: white;
  border-radius: 1rem;
}

input,
textarea,
button {
  margin: 0.5rem;
}

button {
  padding: 0.5rem;
}
</style>
