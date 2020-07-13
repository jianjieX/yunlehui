<template>
    <div>
      <div>我是子组件Son<button @click="pushData">点击我向父组件传值</button></div>
      <div>{{parentData}}</div>
    </div>
</template>

<script>
    export default {
        name: "son",
        props:['parentData'],
        data(){
          return{

          }
        },
      methods:{
        pushData:function () {
            this.$emit('update:msg','我是子组件传递给父组件的内容')
        }
      }
    }
</script>

<style scoped>

</style>
