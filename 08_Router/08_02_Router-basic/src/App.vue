<script setup>
import {RouterLink, RouterView} from 'vue-router'
import { ref, onUpdated } from "vue";

</script>

<template>
  <header class="text-center text-3xl mb-2">
    <h1>Router 사용하기</h1>
    <div class="text-center text-xl">
      <!-- <h2>basic Router</h2>
      <nav class="w-full text-center mt-8 text-xl">
        <RouterLink to="/" replace active-class="active" class="ml-2.5 text-base">Home</RouterLink>
        <RouterLink to="/pathVariable/1" replace active-class="active" class="ml-2.5 text-base">pathVariable</RouterLink>
        <RouterLink to="/queryString?name=홍길동&age=20" replace active-class="active" class="ml-2.5 text-base">queryString</RouterLink>
      </nav> -->
      <h2>NestedRouter</h2>
      <nav>
        <RouterLink to="/" replace active-class="active" class="ml-2.5 text-base">Home</RouterLink>
        <RouterLink to="/nested" class="ml-2.5 text-base">중첩인덱스</RouterLink>
        <RouterLink to="/nested/view" class="ml-2.5 text-base">중첩라우터</RouterLink>
      </nav>
    </div>
  </header>

  <main>
    <RouterView class="text-center text-sm"/>
  </main>
</template>

<style global lang="postcss">
.active {
  @apply text-red-500;
}

main {
  @apply flex flex-col justify-center items-center;
}

header {
  @apply text-center;
}
</style>
