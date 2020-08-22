<template>
  <div class="home">
<!--    <img alt="Vue logo" src="../assets/logo.png">-->
    <page1/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import page1 from "@/views/page1";
export default {
  name: 'Home',
  components: {
    // HelloWorld
    page1
  }
}
</script>
