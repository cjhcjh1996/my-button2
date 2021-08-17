<template>
  <div class="x-button">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'x-button',
  props: {
    type: String
  }
}
</script>

<style scoped>
  .x-button {
      display: inline-block;
      padding: 3px 6px;
      /* width:40px; */
      height:30px;
      border-radius: 10px;
      background: #ff0;
      color: #333;
      line-height: 30px;
  }
</style>