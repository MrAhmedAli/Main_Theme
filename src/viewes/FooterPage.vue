<template>
  <div class="container-fluid ps-5 pt-5">
    <img src="@/assets/images/footer-image.svg" alt="" />
    <img
      src="@/assets/images/Horizontal_dashes.svg"
      alt=""
      style="margin-top: 60px; width: 1196px"
    />
    <div class="long-rectangle">
      <p class="text-style">
        <label class="note-style">note</label> To edit data at the bottom of the
        site, please go to the system settings, then click on the Footer custom
        page
      </p>
    </div>
  </div>
</template>

<script>
// Your JavaScript code goes here
export default {
  // Component options
};
</script>

<style scoped>
.long-rectangle {
  width: 1196px;
  height: 60px;
  background: var(--first-blue-color);
  text-align: center;
  padding-top: 10px;
  margin-top: 60px;
}
.note-style {
  color: #eb455f;
  font-size: 18px;
  font-weight: 500;
}
.text-style {
  color: var(--second-blue-color);
  font-size: 16px;
  font-weight: 400;
}
</style>
