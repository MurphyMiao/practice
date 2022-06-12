<template>
  <VcViewer/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import VcViewer from './components/VcViewer.vue';

export default defineComponent({
  name: 'App',
  components: {
    VcViewer
  }
});
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
