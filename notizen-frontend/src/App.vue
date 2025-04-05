<template>
  <header>
    <h1>Note App</h1>
  </header>
  <main>
    <NoteForm />
    <NoteList />
  </main>
</template>

<script setup lang="ts">
import NoteForm from './components/NoteForm.vue'
import NoteList from './components/NoteList.vue'
</script>



<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

h1 {
  text-align: center;
  margin-top: 2rem;
  font-size: 2rem;
  color: #374151;
  font-family: 'Segoe UI', sans-serif;
}
</style>
