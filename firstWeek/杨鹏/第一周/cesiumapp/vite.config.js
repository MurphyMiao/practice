import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
//引入cesium
import cesium from 'vite-plugin-cesium';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),cesium()]
})
