<template>
  <div class="x-button" @click="getName">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'x-button',
  props: {
    type: String
  },
  created(){
    // this.getName();
  },
  methods:{
    getName(){
      let myname = 'hello world';
      this.$emit('btn-click',myname);
    }
  }
}
</script>

<style scoped>
  .x-button {
      display: inline-block;
      padding: 3px 6px;
      height:30px;
      border-radius: 10px;
      background: #ff0;
      color: #333;
      line-height: 30px;
      cursor: pointer;
  }
</style>