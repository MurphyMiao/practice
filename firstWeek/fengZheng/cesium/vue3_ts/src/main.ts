import { createApp } from 'vue'
import App from './App.vue'

//引入vue-cesium
import VueCesium from 'vue-cesium'

//导入css样式
import 'vue-cesium/dist/index.css'

//导入组件语言
import zhHans from 'vue-cesium/es/locale/lang/zh-hans'//简体中文（zh-hans）、英文（en-us）

const app = createApp(App)

app.use(VueCesium, {
  cesiumPath: 'https://unpkg.com/cesium@latest/Build/Cesium/Cesium.js',//打包后页面访问 CesiumJS 库的主文件（也就是 Cesium.js）的 URL
  accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJjYmFjNGFiNi01MjFkLTQ4Y2YtYWQzZi0xNTQ5ODc0MWU3MzMiLCJpZCI6OTcxNzUsImlhdCI6MTY1NTAyNTY2OX0.kjmEtJtrv74Dc6VEdKpzmt0mCtJn_yK0uvcWhXrQFYg',//访问令牌
  locale: zhHans // 改成英文
})//全局挂载vue-cesium

app.mount('#app')