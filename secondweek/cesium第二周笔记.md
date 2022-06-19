# camera

常用方法:

+ Camera.setView(options) ：立即将相机设置在特定的位置和方向
+ Camera.zoomIn(amount) ：沿着视图矢量向前移动相机
+ Camera.zoomOut(amount) ：沿着视图矢量向后移动相机
+ Camera.flyTo(options) ：创建从当前摄像机位置到新位置的动画摄像机飞行
+ Camera.lookAt(target, offset) ：定位和定位相机，以给定偏移量瞄准目标点
+ Camera.move(direction, amount) ：沿任何方向移动相机
+ Camera.rotate(axis, angle) ：围绕任何轴旋转相机



事件：

相机事件类型（CameraEventType）

+ LEFT_DRAG：鼠标左键按住，然后移动鼠标并松开按键。

+ RIGHT_DRAG：鼠标右键按住，然后移动鼠标并松开按键。

+ MIDDLE_DRAG：鼠标中键按住，然后移动鼠标并松开按键。

+ WHEEL：滚动鼠标中键滚轮。

+ PINCH：双指触控屏幕。

+ Camera.changed：相机发生变化时触发

+ Camera.moveEnd：相机停止移动时触发

+ Camera.moveStart：相机开始移动时触发



# 底图服务

加载底图:

```js
let provider = new Cesium.UrlTemplateImageryProvider({
            url:'http://222.73.139.7:8082/tileMap/services/MapServer/img_c@/tile/{z}/{y}/{x}?startLevel=1',
          })
const layer = new Cesium.ImageryLayer(provider)
viewer.imageryLayers.add(layer)
```

移除底图:

```js
viewer.imageryLayers.removeAll()
//或
viewer.imageryLayers.remove(viewer.imageryLayers.get(0));
```



Cesium目前支持的影像服务类型有：

```bash
ArcGisMapServerImageryProvider，支持ArcGIS Online和 Server 的相关服务。
BingMapsImageryProvider，Bing 地图影像，可以指定 mapStyle ，具体可以见 BingMapsStyle 类。
OpenStreetMapImageryProvider，OSM影像服务，根据不同的 url 选择不同的风格。
TileMapServiceImageryProvider，可以自己下载瓦片，发布服务。
GoogleEarthEnterpriseImageryProvider，谷歌地球的服务。
GoogleEarthEnterpriseMapsProvider，谷歌地球的服务。
GridImageryProvider，渲染每一个瓦片内部的格网。
IonImageryProvider，Cesium Ion 中的在线服务，默认全局基础图像图层。
MapboxImageryProvider，Mapbox 影像服务，根据 mapId 指定地图风格。
MapboxStyleImageryProvider，Mapbox影像服务，根据 styleId 指定地图风格。
SingleTileImageryProvider，单张图片的影像服务，适合离线数据或对影像数据要求并不高的场景下。
TileCoordinatesImageryProvider，展示内部渲染网格瓦片划分情况，方便调试。
UrlTemplateImageryProvider，指定 url 的 format 模版，方便用户实现自己的 Provider，比如国内的高德，腾讯等影像服务，url 都是一个固定的规范，都可以通过该 Provider 轻松实现。
WebMapServiceImageryProvider，符合 WMS 规范的影像服务都可以通过该类封装，指定具体参数实现。
WebMapTileServiceImageryProvider，服务 WMTS 规范的影像服务，都可以通过该类实现，比如国内的天地图。
```



# entity

## billboard

billboard也叫广告牌，用图片标注的形式表示地理点位信息。是一种特别简单的模型，它会自动计算，使图片下面始终面向摄像机，这种技术也叫广告牌技术。

```js
 //加载蓝色小圆点
 point: {
     color: Cesium.Color.RED,    //点位颜色
     pixelSize: 5                //像素点大小
 },
 //点位
 billboard: {
     image: './images/hsq.webp', // default: undefined
     show: true, // default
     // 偏移
     pixelOffset: new Cesium.Cartesian2(10, -10), // default: (0, 0)
     // eyeOffset: new Cesium.Cartesian3(0.0, 0.0, 0.0), // default
     horizontalOrigin: Cesium.HorizontalOrigin.LEFT, // default 水平对齐方式
     verticalOrigin: Cesium.VerticalOrigin.BOTTOM, // default: CENTER  垂直对齐方式
     // 按距离缩放  即距离大于10000米时，图标不显示
     scaleByDistance: new Cesium.NearFarScalar(1.5e2, 1, 10000, 0.0),
     // 放大缩小
     scale: 2.0, // default: 1.0
     // color: Cesium.Color.RED, // default: WHITE
     // 旋转
     rotation: Cesium.Math.PI_OVER_FOUR, // default: 0.0
     alignedAxis: Cesium.Cartesian3.ZERO, // default
     width: 32, // default: undefined
     height: 32, // default: undefined
 }
```



## polygon

PolygonGraphics 描述由组成外部形状和任何嵌套孔的线性环层次定义的多边形。多边形符合球体的曲率，可以放置在表面或高度上，也可以随意拉伸成一个体积。

```bash
api
hierarchy 	指定多边形层次结构,说白了就是多边形的经纬度
height	 距离地表高度
heightReference	 相对高度的高度
extrudedHeight	 厚度
extrudedHeightReference 	相对厚度
show 	控制显隐
fill 	是否填充
material 	填充颜色
outline 	是否有外边线
outlineColor 	外边线颜色
outlineWidth 	外边线宽度
stRotation	 指定多边形纹理从北逆时针旋转的数值属性。
granularity 	指定每个纬度和经度点之间的角度距离的数值属性
perPositionHeight	 是否利用每个点的高度,制造幅度?
closeTop 	是否关闭多边形的顶部,也就是拿掉盖子
closeBottom 	是否关闭底部
```

