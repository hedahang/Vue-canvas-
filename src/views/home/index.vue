<template>
  <div class="content">
    <wheel></wheel>
    <tips></tips>
  </div>
</template>

<style>
  /* 大转盘样式 */
  .content{
    display:block;
    width:95%;
    /*居中显示*/
    margin: 30px auto;
  }
  .content .wheel{
    display:block;
    width:100%;
    position:relative;
    /*转盘的背景*/
    background-image:url("../../assets/wheel-bg.png");
    background-size:100% 100%;
  }
  .content .wheel canvas.item{
    width:100%;
  }
  .content .wheel img.pointer{
    position:absolute;
    width:31.5%;
    height:42.5%;
    left:34.6%;
    top:23%;
  }
  .tips{
    text-align:center;
    margin:20px 0;
    font:normal 24px 'MicroSoft YaHei';
  }

</style>

<script>
  import wheel from './wheel.vue'
  import tips from './tips.vue'
  export default{
    components:{
      wheel:wheel,
      tips:tips,
    }
  }
</script>
