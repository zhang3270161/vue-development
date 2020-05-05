<template>
  <div class="app-container">
    <el-input v-model="filter.text" placeholder="请输入批次号" style="margin-bottom:30px;" >
      <el-button slot="append" icon="el-icon-search" @click="showDialog"></el-button>
    </el-input>


    <el-dialog
      title="选择批次"
      :visible.sync="isShow"
      custom-class="mySearch"
      @close="formInline.inputValue = null"
      center>
      <el-form :inline="true" :model="formInline" class="demo-form-inline ">
        <div class="el-col-xs-24 el-col-md-12">
          <el-input placeholder="请输入内容" v-model="formInline.inputValue">
            <template slot="prepend">批次号</template>
          </el-input>
        </div>

        <div class="el-col-xs-24 el-col-md-12 mt15 noWarp">
          <el-button class="ml15">查找</el-button>
          <el-button>&lt;</el-button>
          <el-button>&gt;</el-button>
          <el-button @click="isShow = false">退出</el-button>
        </div>

        <el-table
          :data="list"
          style="width: 100%"
          highlight-current-row
          @current-change="selectObject"
        >
         <!-- <el-table-column
            prop="INSTANCE_ID"
            align="center"
            label="车间ID">
          </el-table-column>-->
          <el-table-column
            prop="FACILITY_NAME"
            align="center"
           >
          </el-table-column>
        </el-table>

        <!--<div>
          <div v-for="n in list" :key="n.FACILITY_ID" @click="selectObject(n)">{{n.FACILITY_NAME}}</div>
        </div>-->

      </el-form>
    </el-dialog>

  </div>
</template>
<script>
  import {getLotdialog} from '@/api/lot'
export default {

  data() {
    return {
      filter: {
        text:null,
        id:null
      },
      isShow:false,
      formInline:{
        inputValue:null
      },
      list:[]
    }

  },
  watch: {
    filterText(val) {
      this.$refs.tree2.filter(val)
    }
  },

  methods: {
    filterNode(value, data) {
      if (!value) return true
      return data.label.indexOf(value) !== -1
    },
    showDialog(){
      // this.isShow = true;
      let sendData = {
        username: 'Admin'
      }
      let me = this // 记录当前vue的组件
      me.list = []
      getLotdialog(sendData).then(res =>{
        console.log(res);

        if(res.success){
          me.isShow = true
          me.list = res.msg
        }else{
          me.$message('666666666')   //element API 有提示类型
        }
      }).catch(err => {

      })
    },
    selectObject(n){
      if(n){
        this.filter.id = n.INSTANCE_ID
        this.filter.text = n.FACILITY_NAME
        this.isShow = false
      }
    },
    fun1(){
      console.log(222);
      let sendData = {
        username: 'Admin'
      }
      let me = this // 记录当前vue的组件
      me.list = []
      getLotdialog(sendData).then(res =>{
        console.log(res);

        if(res.success){
          me.isShow = true
          me.list = res.msg
        }else{
          me.$message('666666666')   //element API 有提示类型
        }
      }).catch(err => {

      })
    }
  }
}
</script>
<style lang="scss">
.app-container {
  .mySearch{
    width: 90%;
    overflow: hidden;
    padding-bottom: 30px;
  }
  @media (max-width: 768px) {
    .ml15{
      margin-left: 0;
    }
  } /*<=768的设备*/
  @media (min-width: 768px) {
    .mt15{
      margin-top: 0;
    }
  } /*>=768的设备*/
  @media (min-width: 1280px) {
    .mySearch{
      width: 90%;
    }
  } /*>=1280的设备*/

  @media (min-width: 1366px) {
    .mySearch{
      width: 85%;
    }
  }

  @media (min-width: 1440px) {
    .mySearch{
      width: 80%;
    }
  }
}
</style>

