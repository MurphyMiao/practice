<template>
 <div id="cesiumContainer"></div>
</template>
<script setup>
import * as Cesium from 'cesium';
import { onMounted } from 'vue'
onMounted(()=>{
  // const viewer = new Cesium.Viewer('cesiumContainer');
  var custom=new Cesium.ArcGISTiledElevationTerrainProvider({
    url:'//services.arcgisonline.com/ArcGis/rest/services/World_Street_Map/MapServer'
  })
  var viewer=new Cesium.Viewer('cesiumContainer',{
    //不创建baseLayerPicker小部件
    baseLayerPicker:false,
    //设置图像提供的程序-------这里我没有拿到 所以用默认的图像程序
    // imageryProvider:custom,
    //设置Cesium世界地形
    terrainProvider:Cesium.createWorldTerrain({
      requestWaterMask:true,
      requestVertexNormals:true
    })
  });
  //设置进入地图查看的位置
  viewer.camera.setView({
    //设置查看位置的经纬度(可以加个高度)
    destination:Cesium.Cartesian3.fromDegrees(113.318977,23.114155,2000),
    //设置方向，俯视仰视
    orientation:{
      heading:Cesium.Math.toRadians(90),
      pitch:Cesium.Math.toRadians(-90),
    }
  })

})

</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html,body,#cesiumContainer{
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
</style>
