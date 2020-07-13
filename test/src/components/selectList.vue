<template>
    <div>
      <el-select v-model="provinceAreaCode" placeholder="请选择" @change="switchOption">
        <el-option
          v-for="item in options"
          :key="item.merchantId"
          :label="item.makerName"
          :value="item.merchantId">
        </el-option>
      </el-select>
    </div>
</template>

<script>
    export default {
        name: "selectList",
        data(){
          return{
            options:[
              {
                id: "20",
                merchantId: "92",
                makerName: "新疆",
                type: "商户创客"
              }
            ],
            listFrom:{
              belongMakerId:''
            },
            provinceAreaCode:''
          }
        },
      watch:{
        provinceAreaCode(val) {
          this.$emit('update:province', val)
        },
      },
      methods:{
          switchOption:function () {
            this.$http.ajaxGet(`http://114.116.103.244:20001/saas-server/merchant/maker`, {}).then((result) => {
              this.options=result;
            });
          }
        }
    }
</script>

<style scoped>

</style>
