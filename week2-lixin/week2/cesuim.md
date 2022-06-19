### cesuim

camera

camera是由位置、方向和视锥体定义的

1、setView中有Cartesian3 和renctangle 两个方式

destination   在坐标中自顶向下可见的矩形最终的位置

orientation   相机对准的方法     heading-方向，pitch -倾斜角度，

2、FlyTo方法   通过调用camera方法可以跳转镜头到指定位置 

duration:飞行时间

cancel:取消执行

pitchAdjustHeight：俯仰调整角度

maximumHeight:最大飞行高度

flyOverLongitude：强制飞过该经度

3、lookAt

 lookAt(target, offset)

target:使用目标的位置和方向，offset偏移量位置

HeadingPitchRange ：头部俯仰范围

### 底图服务

加载底图：new Cesium.UrlTemplateImageryProvider （{}）

移除：viewer.imageryLayers.remove /new Cesium.EllipsoidTerrainProvider 

### polygon

```
//加载
const redPolygon = viewer.entities.add({
  name: "Red polygon on surface",
  polygon: {
    hierarchy: Cesium.Cartesian3.fromDegreesArray([
      -115.0,
      37.0,
      -115.0,
      32.0,
      -107.0,
      33.0,
      -102.0,
      31.0,
      -102.0,
      35.0,
    ]),
    material: Cesium.Color.RED,
  },
});
```

### billboard

```
  viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(-75.59777, 40.03883),
    billboard: {
      image: "../images/Cesium_Logo_overlay.png", // default: undefined
      show: true, // default
      pixelOffset: new Cesium.Cartesian2(0, -50), // default: (0, 0)
      eyeOffset: new Cesium.Cartesian3(0.0, 0.0, 0.0), // default
      horizontalOrigin: Cesium.HorizontalOrigin.CENTER, // default
      verticalOrigin: Cesium.VerticalOrigin.BOTTOM, // default: CENTER
      scale: 2.0, // default: 1.0
      color: Cesium.Color.LIME, // default: WHITE
      rotation: Cesium.Math.PI_OVER_FOUR, // default: 0.0
      alignedAxis: Cesium.Cartesian3.ZERO, // default
      width: 100, // default: undefined
      height: 25, // default: undefined
    },
  });
}
```

### javascript第八章

```
 Object.defineProperties()可以定义多个属性
Object.getOwnPropertyDescriptor()方法可以读取属性
Object.assign()方法进行合并 ，进行浅拷贝，对象的引用
构造函数
let person = new Person
原型
person.protitype.job = function(){}
原型链
SuperType.prototype.getSuperValue = function() { 
 return this.property; 
};
组合继承：原型继承+构造函数
function a(){
    p.call(this)
}
student.prototype = new Person
原型继承
student.prototype = new Person()
类：实例化通过new实例化
class foo(){}  
let p = new foo()

派生类的方法可以通过 super 关键字引用它们的原型。
不要在调用 super()之前引用 this，否则会抛出 ReferenceError 

```

