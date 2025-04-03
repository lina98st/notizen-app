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
h1 {
  margin: 3rem 0 1rem 3rem;
}
</style>
