<template>
  <vc-config-provider :cesium-path="vcConfig.cesiumPath">
    <vc-viewer></vc-viewer>
  </vc-config-provider>
</template>
<script setup lang="ts">
  import { reactive } from 'vue'
  import { VcConfigProvider, VcViewer } from 'vue-cesium' //“按需导入”VcConfigProvider和VcViewer组件

  const vcConfig = reactive({
    cesiumPath: 'https://unpkg.com/cesium@latest/Build/Cesium/Cesium.js' //设置js导入地址
  })
</script>

<style scoped lang="less">

</style>