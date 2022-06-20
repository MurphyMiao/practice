###在vue3下载cesium

```js
npm i cesium vite-plugin-cesium vite -D

在vite.config.js文件里面配置
import { defineConfig } from 'vite';
import cesium from 'vite-plugin-cesium';
export default defineConfig({
  plugins: [cesium()]
});
```

#### 实现一个地图

```js
<template>
  <div id="cesiumContainer"></div>
</template>
<script setup lang="ts">
import { onMounted } from "vue";
import * as Cesium from "cesium";
// 在生命周期挂在后实现一个地球
onMounted(() => {
  // 构造一个地球
  let viewer = new Cesium.Viewer("cesiumContainer", {});
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
  overflow: hidden;
}
</style>

```

#### ArcGIS提供的服务器图形图像

```js
// ArcGIS提供的服务器图形图像
  let custom = new Cesium.ArcGISTiledElevationTerrainProvider({
    url:'//services.arcgisonline.com/ArcGis/rest/services/World_Street_Map/MapServer'
  })
```

####使用本地图片更换地图层

```js
// 使用本地图片更换地图层
    imageryProvider: new Cesium.SingleTileImageryProvider({
      // 图片地址
      url:state.imageUrl
    })
```

#### 利用地图连接底服务更换地图层

```js
// 利用地图连接底服务更换地图层
  let provider = new Cesium.UrlTemplateImageryProvider({
      url:"http://t0.tianditu.gov.cn/DataServer?T=img_c&tk=0c320179ed1e4774164cea02bc5e98f8&x={x}&y={y}&l={z1}"
    })
     let layer = new Cesium.ImageryLayer(provider)
     viewer.imageryLayers.add(layer)
```

#### 配置地图

```js
// 不创建baseLayerPicker小部件(图标图块)
    baseLayerPicker:false
// ArcGIS提供的服务器图形图像
  let custom = new Cesium.ArcGISTiledElevationTerrainProvider({
    url: "//services.arcgisonline.com/ArcGis/rest/services/World_Street_Map/MapServer",
  });
// 设置ArcGIS提供的服务器图形图像
    imageryProvider: custom,
// 设置cesium世界地图地形
    terrainProvider: Cesium.createWorldTerrain({
      requestWaterMask: true, // 请求水体效果所需要的海岸线数据
      requestVertexNormals: true, // 请求地形照明数据
    }),
```

#### 配置地图位置

```js
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
```

#### 移除地图层

```js
 viewer.imageryLayers.removeAll()
```

#### 利用地图连接底服务更换地图层

```js
// 利用地图连接底服务更换地图层
  let provider = new Cesium.UrlTemplateImageryProvider({
      url:"http://t0.tianditu.gov.cn/DataServer?T=img_c&tk=0c320179ed1e4774164cea02bc5e98f8&x={x}&y={y}&l={z1}"
    })
     let layer = new Cesium.ImageryLayer(provider)
     viewer.imageryLayers.add(layer)
```





