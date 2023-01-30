<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import testHook from './components/testHook.vue'
import { ref ,onMounted} from 'vue'
import { getCurrentInstance } from '@vue/runtime-core';


//获取组件引用
// const currentInstance = getCurrentInstance()
const testHookRef =ref(null);
console.log(testHookRef)
function t(){
  // currentInstance.ctx.$refs.testHookRef.f1()
  testHookRef.value.f1();
}





</script>

<template>
  <div>
    
      <img @click="t" src="/vite.svg" class="logo" alt="Vite logo" />
    
    
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    
  </div>
  <HelloWorld  msg="Vite + Vue" />
  <testHook ref="testHookRef" msg="testHook" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
