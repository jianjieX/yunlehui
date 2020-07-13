<template>
  <div class="parent">
    <span>我是parent组件</span>
    <span>{{msg}}</span>
    <Son parentData="我是父组件传给子组件的内容" :msg.sync="msg"></Son>
<!--    <el-select v-model="listFrom.belongMakerId" placeholder="请选择">-->
<!--      <el-option-->
<!--        v-for="item in options"-->
<!--        :key="item.merchantId"-->
<!--        :label="item.makerName"-->
<!--        :value="item.merchantId">-->
<!--      </el-option>-->
<!--    </el-select>-->
    <div class="mackScroll"></div>
<!--    <SelectList :province.sync="listFrom.province"></SelectList>-->
    <Area :province.sync="listForm.companyReceiverProvince"
          :city.sync="listForm.companyReceiverCity"
          :my-area.sync="listForm.companyReceiverRegion" class="g-merchant-area"></Area>
  </div>
</template>

<script>
    import Son from '@/components/son'
    import SelectList from '@/components/selectList'
    import Area from '@/components/Area'
    export default {
        name: "parent",
        components:{
          Son,
          SelectList,
          Area
        },
      data(){
          return{
            msg:'',
            options: [],
            listForm: {
              // 商户类型 默认为2 即为小微店
              merchantType: '2',
              // 所属创客
              belongMakerId: '',
              // 店铺名称
              shopName: '',
              // 店铺头像
              shopHeader: '',
              // 公司LOGO
              merchantHeader: '',
              // 启用状态
              initiateStatus: '0',
              // 业务审核状态
              auditStatus: '1',
              // 商家分类
              merchantSort: '',
              // 公司名称
              merchantName: '',
              // 统一社会信用代码
              uniformSocialCreditCode: '',
              // 营业执照
              businessLicenseList: '',
              // 营业执照结束日期
              businessLicenseValidity: '',
              // 营业执照结束日期 - 长期 默认为false
              businessLicenseValidityType: false,
              // 公司地址省
              companyReceiverProvince: '',
              // 公司地址市
              companyReceiverCity: '',
              // 公司地址区
              companyReceiverRegion: '',
              // 公司详细地址
              companyReceiverDetailAddress: '',
              // 店主姓名
              legalPersonName: '',
              // 店主手机号
              legalPersonPhone: '',
              // 店主身份证号
              legalPersonIdNumber: '',
              // 店主身份证有效期
              legalPersonIdNumberIdentity: '',
              // 店主身份证有效期 - 长期 默认为false
              legalPersonIdNumberIdentityType: false,
              // 店长姓名
              userName: '',
              // 店长手机号
              userPhone: '',
              // 店长身份证号
              userNumberId: '',
              // 店长身份证有效期
              userIdValidity: '',
              // 店长身份证有效期 - 长期 默认为false
              userIdValidityType: false,
              // 实际控制人姓名
              actualControllerName: '',
              // 实际控制人身份证号
              actualControllerIdNumber: '',
              // 实际控制人身份证有效期
              actualControllerIdValidity: '',
              // 实际控制人身份证有效期 - 长期 默认为false
              actualControllerIdValidityType: false,
              // 银行卡号
              creditCardNumbers: '',
              // 账户类型
              typeOfAssuringBank: '2',
              // 银行名称
              assuringBank: '',
              // 银行预留手机号
              assuringBankPhone: '',
              // 提现密码
              paymentPassword: '',
              // 微信客服ID
              weCharServiceId: '',
              // 客服电话
              servicePhone: '',
              // 店主身份证正面照
              legalPersonIdNumberPhotoOne: '',
              // 店主身份证反面照
              legalPersonIdNumberPhotoTwo: '',
              // 法人开户银行卡照片正面
              legalPersonAssuringBankPhotoOne: '',
              // 法人开户银行卡照片反面
              legalPersonAssuringBankPhotoTwo: '',
              // 店铺内照片
              inShopPic: '',
              // 店铺门头照片
              shopDoorPic: '',
              // 其它资质照片
              qualificationPhotoList: [],
              //店铺介绍
              shopIntroduction: '',
              //店铺营业开始时间
              beginTime: '08:00',
              //店铺营业结束时间
              endTime: '20:00',
              //店铺地址-省
              province: '',
              //店铺地址-市
              city: '',
              //店铺地址-区
              area: '',
              //店铺地址-详细地址
              merchantShopAddress: '',
              // 经度
              longitude: 0,
              // 纬度
              dimension: 0
            },
          }
      },
        methods:{

        },
      watch:{

      },
      mounted() {
        this.$http.ajaxGet(`http://114.116.103.244:20001/saas-server/merchant/maker`, {}).then((result) => {
          this.options=result;
        });
      }
    }
</script>

<style scoped>
  .mackScroll{
    height: 500px;
  }
</style>
