<script setup>
import Test from './components/app/TestParents.vue';
import Test2 from './components/app/Test2Parents.vue'
</script>

<template>
    <h1>두더지 잡기</h1>
  <div>
    <Test/>
  </div>

  <main>
    <Test2/>
  </main>
</template>

<style scoped>
Test {
    border: 1px solid;
}
</style>
