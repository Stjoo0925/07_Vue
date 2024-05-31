<script setup>
import {ref, reactive, watch, watchEffect} from 'vue';
import Test2Child from './Test2Child.vue';

const label = ref('');
const emoji = ref('');
const emojis = reactive({});

watchEffect(async () => {
    const data = await fetch("https://api.github.com/emojis").then(response => response.json());
    Object.assign(emojis, data);
    console.log(emojis);
});

watch(label, function(newVal) {
    if (emojis[newVal]) {
        emoji.value = emojis[newVal];
    } else {
        emoji.value = '';
    }
});
</script>

<template>
    <div class="div1">
        <input v-model="label">
        <Test2Child>
            <template #[label]>
                <img :src="emoji" alt="X"/>
            </template>
        </Test2Child>
    </div>
</template>

<style scoped>
template {
    display: flex; 
    justify-content: center; 
    align-items: center; 
    height: 100vh;
}
.div1 {
    display: flex; 
    height: 30px;
}
.div1 > div {
    margin-left: 20px; 
    width: 30px; 
    height: 30px;
}
.div1 > div > img {
    width: 100%; 
    height: 100%;
}
</style>
