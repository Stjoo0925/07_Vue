<script setup>
  import MyComponent from './components/01_component/MyComponent.vue';
  import Parents from './components/02_slotintro/SlotParents.vue';
  import NamedParents from './components/03_slotnamed/NamedParents.vue';
  import DynamicParents from './components/04_dynamicSlot/DynamicParents.vue';

</script>

<template>
  <div>
    <h1>Component Container</h1>
    <MyComponent/>
  </div>
  <main>
    <Parents/>
    <div class="test">
      <NamedParents/>
    </div>
    <div class="test">
      <DynamicParents/>
    </div>
  </main>
</template>

<style scoped>
.test{
  border: 2px solid red;
}
</style>
