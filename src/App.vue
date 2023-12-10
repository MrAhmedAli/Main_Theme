<template>
  <ThemesLayouts/>
</template>

<script>
import ThemesLayouts from './layouts/ThemesLayout.vue'

export default {
  name: 'App',
  components: {
    ThemesLayouts
  }
}
</script>

<style>
@import "./assets/css/global.css";

body{background-color: var(--dark-blue-color);}
</style>
