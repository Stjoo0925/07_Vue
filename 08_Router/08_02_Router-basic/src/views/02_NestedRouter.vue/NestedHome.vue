<script setup>
    import { useRouter } from 'vue-router';
    const router = useRouter();
</script>

<template>
    <h3>NestedHome</h3>
    <button @click="()=> router.push('/nested/hidden')">숨긴화면</button>
    <button @click="()=> router.go(1)">앞으로가기</button>
</template>

