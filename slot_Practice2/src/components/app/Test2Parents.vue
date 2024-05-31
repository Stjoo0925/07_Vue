<script setup>
import { ref, reactive, watch, watchEffect } from 'vue';
import Test2Child from './Test2Child.vue';

const label = ref('');
const emoji = ref('');
const emojis = reactive({});
const emojiStyle = ref({}); 

watchEffect(async () => {
    const data = await fetch("https://api.github.com/emojis").then(response => response.json());
    Object.assign(emojis, data);
    console.log(emojis);
});

watch(label, function(newVal) {
    if (emojis[newVal]) {
        emoji.value = emojis[newVal];
        setRandomPosition();
    } else {
        emoji.value = '';
    }
});

function setRandomPosition() {
    const randomX = Math.floor(Math.random() * 90) + 5; 
    const randomY = Math.floor(Math.random() * 90) + 5; 
    emojiStyle.value = {
        position: 'absolute',
        left: `${randomX}%`,
        top: `${randomY}%`
    };
}
</script>

<template>
    <div class="container">
        <input v-model="label" placeholder="이모지 이름을 입력하세요">
        <Test2Child>
            <template #default>
                <div v-if="emoji" :style="emojiStyle">
                    <img :src="emoji" alt="이모지"/>
                </div>
                <div v-else>
                    <span>이모지를 찾을 수 없습니다</span>
                </div>
            </template>
        </Test2Child>
    </div>
</template>

<style scoped>
.container {
    position: relative;
    width: 100vw;
    height: 100vh;
}
.div1 > input {
    position: absolute;
    top: 10px;
    left: 10px;
}
</style>
