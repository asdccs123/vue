<template>
  <div>
    <h2 class="title">{{message}}</h2>
    <button @click="btnClick">按钮1</button>
    <Cpn/>
  </div>

</template>

<script>
import Cpn from "./Cpn.vue";

export default {
  name: "App",
  components: {Cpn},
  data(){
    return {
      message:'Hello world',
    }
  },
  methods: {
    btnClick() {
      console.log('hello webpack');
    }
  }
}
</script>

<style scoped>
.title{
  color:green;
}
</style>