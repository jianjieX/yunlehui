<template>
  <section>
    <el-select v-model="provinceAreaCode" placeholder="请选择" @change="getCityList">
      <el-option
        v-for="(item,index) in provinceList"
        :key="index"
        :label="item.areaName"
        :value="item.areaCode"
      >
        {{ item.areaName }}
      </el-option>
    </el-select>
    <el-select v-model="cityAreaCode" placeholder="请选择" @change="getAreaList">
      <el-option
        v-for="(item,index) in cityList"
        :key="index"
        :label="item.areaName"
        :value="item.areaCode"
      >
        {{ item.areaName }}
      </el-option>
    </el-select>
    <el-select v-model="streetAreaCode" placeholder="请选择">
      <el-option
        v-for="(item,index) in areaList"
        :key="index"
        :label="item.areaName"
        :value="item.areaCode"
      >
        {{ item.areaName }}
      </el-option>
    </el-select>
  </section>
</template>
<script>
  /**
   * 省市区三级联动组件
   *
   *@date 2019-07-16
   *@author chenyongzheng
   */
  export default {
    name: 'Area',
    props: {
      /**
       * 省
       */
      province: {
        type: String,
        required: false,
        default: () => null
      },

      /**
       * 市
       */
      city: {
        type: String,
        required: false,
        default: () => null
      },

      /**
       *  区
       */
      myArea: {
        type: String,
        required: false,
        default: () => null
      }
    },
    data() {
      return {
        loading: true,
        // 省list
        provinceList: [],
        // 市list
        cityList: [],
        // 区list
        areaList: [],
        // 省code
        provinceAreaCode: this.province,
        // 市code
        cityAreaCode: this.city,
        // 区code
        streetAreaCode: this.myArea
      }
    },
    watch: {
      /**
       * 监听省code
       * @param val
       */
      provinceAreaCode(val) {
        this.$emit('update:province', val)
      },

      /**
       * 监听市code
       * @param val
       */
      cityAreaCode(val) {
        this.$emit('update:city', val)
      },

      /**
       * 监听区code
       * @param val
       */
      streetAreaCode(val) {
        this.$emit('update:myArea', val)
      },

      /**
       * 监听省
       * @param val
       */
      province(val) {
        this.provinceAreaCode = val
        if (val) {
          this.getCityList(val)
        }
      },

      /**
       * 监听市
       * @param val
       */
      city(val) {
        this.cityAreaCode = val
        if (val) {
          this.getAreaList(val)
        }
      },

      /**
       * 监听区
       * @param val
       */
      myArea(val) {
        this.streetAreaCode = val
      }
    },
    methods: {
      /**
       * 获取省
       */
      getProvince() {

        this.$http.ajaxGet(`http://114.116.103.244:20001/saas-server/admin/findAllProvince`).then((result) => {
          this.provinceList = result;
        });

      },

      /**
       * 获取市
       * @param id
       */
      getCityList(id) {

        this.cityAreaCode = '';
        this.streetAreaCode = '';
        this.$http.ajaxGet(`http://114.116.103.244:20001/saas-server/admin/findCityByProvinceCode/${id}`).then((result) => {
          this.cityList = result;
        });

      },

      /**
       * 获取地区
       * @param id
       */
      getAreaList(id) {
        this.streetAreaCode = '';

        this.$http.ajaxGet(`http://114.116.103.244:20001/saas-server/admin/findLoadByCityCode/${id}`).then((result) => {
          this.areaList = result;
        });

      }
    },
    mounted() {
      this.getProvince()
    },
  }
</script>
<style scoped>

</style>
