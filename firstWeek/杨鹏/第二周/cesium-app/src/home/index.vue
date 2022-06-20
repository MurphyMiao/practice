<template>
  <div id="cesiumContainer"></div>
  <button @click="quchengdu">去成都</button>
</template>
<script setup lang="ts">
import { onMounted, reactive } from "vue";
import * as Cesium from "cesium";
// 引入自定义地球表面图片
import url from "../img/lADPDiQ3N9vAfp3NCADNEAA_4096_2048.jpg";
// import BaseLayerPicker from "cesium/Source/Widgets/BaseLayerPicker/BaseLayerPicker";
const state = reactive({
  imageUrl: url,
});
// 在生命周期挂在后实现一个地球
onMounted(() => {
  // ArcGIS提供的服务器图形图像
  // let custom = new Cesium.ArcGISTiledElevationTerrainProvider({
  //   // url: "https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer",
  //   url: "https://elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer",
  //   token:
  //     "KED1aF_I4UzXOHy3BnhwyBHU4l5oY6rO6walkmHoYqGp4XyIWUd5YZUC1ZrLAzvV40pR6gBXQayh0eFA8m6vPg..",
  // });
  var terrainProvider = new Cesium.ArcGISTiledElevationTerrainProvider({
    url: "https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer",
    token:
      "KED1aF_I4UzXOHy3BnhwyBHU4l5oY6rO6walkmHoYqGp4XyIWUd5YZUC1ZrLAzvV40pR6gBXQayh0eFA8m6vPg..",
  });
    // var terrainProvider = new Cesium.CesiumTerrainProvider({
    //   url : Cesium.IonResource.fromAssetId(3956),
    //   requestWaterMask: true, // 请求水体效果所需要的海岸线数据
    //   requestVertexNormals: true, // 请求地形照明数据
    // })
  // 构造一个地球
  let viewer = new Cesium.Viewer("cesiumContainer", {
    // 使用本地图片更换地图层
    // imageryProvider: new Cesium.SingleTileImageryProvider({
    //   // 图片地址
    //   url: state.imageUrl,
    // }),
    // 不创建baseLayerPicker小部件(图标图块)
    baseLayerPicker: false,
    // 设置ArcGIS提供的服务器图形图像
    // imageryProvider: custom,
    // 设置cesium世界地图地形
    // terrainProvider: Cesium.createWorldTerrain({
    //   requestWaterMask: true,
    //   requestVertexNormals: true,
    // }),
  });
  // ArcGIS提供的服务器图形图像
  // viewer.terrainProvider = terrainProvider;
  // 移除地图层
  // viewer.imageryLayers.removeAll()
  // 利用地图连接底服务更换地图层
  let provider = new Cesium.UrlTemplateImageryProvider({
      // url:"http://t0.tianditu.gov.cn/DataServer?T=img_c&tk=0c320179ed1e4774164cea02bc5e98f8&x={x}&y={y}&l={z1}"
      url:'http://222.73.139.7:8082/tileMap/services/MapServer/img_c@/tile/{z}/{y}/{x}?startLevel=1'
      // url:"http://t0.tianditu.gov.cn/img_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={x}&TILECOL={y}&tk=31a9b301e4eb830260441ecbdfb0f3a8"
    })
  let layer = new Cesium.ImageryLayer(provider)
  viewer.imageryLayers.add(layer)
  console.log('ghgrshhthhhhh',viewer.imageryLayers.add(layer))
  // 设置地图位置
  viewer.camera.setView({
    // 设置经度，纬度，相机高度
    destination: Cesium.Cartesian3.fromDegrees(104.06667, 30.66667, 6000),
    // 设置俯视 仰视
    orientation:{
      // 俯视
      heading:Cesium.Math.toRadians(90),
      // 仰视
      pitch:Cesium.Math.toRadians(-90)
    }
});
</script>
<style lang="less" scoped>
body,
html,
#cesiumContainer {
  width: 100%;
  height: 800px;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
</style>
