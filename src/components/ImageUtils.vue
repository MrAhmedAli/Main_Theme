<template>
    <div>
      <slot></slot>
    </div>
  </template>
  
  <script>
  export default {
    mounted() {
      const imageElement = this.$el.querySelector('img');
      if (imageElement) {
        imageElement.addEventListener('contextmenu', (event) => {
          event.preventDefault();
        });
        imageElement.draggable = false;
      }
    },
  };
  </script>