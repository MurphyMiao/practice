<template>
  <div id="cesiumContainer"></div>
</template>
<script setup lang="ts">
import { onMounted, reactive } from "vue";
import * as Cesium from "cesium";
import url from "./image/world.jpg";



    // 在生命周期挂在后实现一个地球
    onMounted(() => {
      // 构造一个地球
      let viewer = new Cesium.Viewer("cesiumContainer", {
        // 地球包裹一个图片
        imageryProvider: new Cesium.SingleTileImageryProvider({
          url: url,
        }),
      });
      // 加载地图服务
      const provide = new Cesium.UrlTemplateImageryProvider({
        url: "http://222.73.139.7:8082/tileMap/services/MapServer/img_c@/tile/{z}/{y}/{x}?startLevel=1",
      });
      const layer = new Cesium.ImageryLayer(provide, {});
      viewer.imageryLayers.add(layer);
      // // 成都点位
       const redLine = viewer.entities.add({
        name: "Red sphere with black outline",
        position: Cesium.Cartesian3.fromDegrees(104.06667, 30.66667, 50000),
        ellipsoid: {
          radii: new Cesium.Cartesian3(3000.0, 3000.0, 30000.0),
          material: Cesium.Color.RED.withAlpha(0.5),
          outline: true,
          outlineColor: Cesium.Color.BLACK,
        },
      });
     viewer.zoomTo(viewer.entities);
    });

</script>
<style lang="less" scoped>
body,
html,
#cesiumContainer {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
