<template>
<!-- 通过动态标签引入 Cesium -->
  <vc-viewer ref="viewerRef" @ready="onViewerReady"> </vc-viewer>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { VcViewer } from 'vue-cesium'
  import type { VcReadyObject } from 'vue-cesium/es/utils/types'

  // const viewerRef = ref<HTMLElement>(null)

  // onMounted(() => {
  //   viewerRef.value.creatingPromise.then((readyObj: VcReadyObject) => {//报错creatingPromise在HTMLElement未定义
  //     console.log(readyObj.Cesium) // Cesium namespace object
  //     console.log(readyObj.viewer) // instanceof Cesium.Viewer
  //   })
  // })


  // beforeLoad	(instance: VcComponentInternalInstance)	对象加载前触发。
  
  //通过组件定义的@ready进行初始化，该函数会在对象加载成功时触发。
  const onViewerReady = (readyObj: VcReadyObject) => {
    console.log(readyObj.Cesium) // Cesium namespace object
    console.log(readyObj.viewer) // instanceof Cesium.Viewer
  }
  // destroyed	(instance: VcComponentInternalInstance)	对象销毁时触发。

</script>