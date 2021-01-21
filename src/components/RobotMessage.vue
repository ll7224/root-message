<template>
  <div class="robot-wrapper">
      <div class="robot">
          机器人参数配置
      </div>
      <div class="robot-item">
          <span class="title">机器人Token:</span>
          <el-input placeholder="请输入机器人access_token" v-model="access_token"/>
      </div>
      <div class="robot-item"> 
          <span class="title">标题:</span>
          <el-input placeholder="请输入标题" v-model="title"/>
      </div>
      <div class="robot-item">
          <span class="title">内容:</span>
          <el-input placeholder="请输入发布内容，md格式" type="textarea"
                    :autosize="{minRows: 20}" v-model="content"/>
      </div>
      <div class="robot-btn">
         <el-button type="danger" @click="resetForm">重置</el-button>
         <el-button type="primary" @click="submit">提交</el-button>
      </div>
  </div>
</template>
<script>
import { postMessage } from '../utils/api';
import { mdParams } from '../utils/constants'
import { cloneDeep } from "lodash";
import axios from "axios";
export default {
   data() {
       return {
          access_token: '',
          title: '',
          content: ''
       }
   },
   methods: {
       resetForm() {
        //   this.access_token = '';
          this.title = ''
          this.content = ''
       },
       submit() {
           if(!this.access_token || !this.title || !this.content) {
             this.$message({
                 message: '请填写所有信息',
                 type: 'error'
              });
              return;
           }
           let params = cloneDeep(mdParams)
           params.markdown.title = this.title
           params.markdown.text = this.content.replace(/\n/g,"'\n'")
           console.log(params.markdown.text)
           debugger
           postMessage(this.access_token, {
              "msgtype": "markdown",
              "markdown": {
                  "title": this.title,
                  "text": this.content
              }
           }).then((res) => {
               if (res.errcode === 310000) {
                  this.$message({
                    message: '消息内容中不包含任何关键词',
                    type: 'error'
                 });
               }
               if(!res.errcode) {
                 this.$message({
                    message: '发送成功，及时查看',
                    type: 'success'
                  });
                  this.resetForm()
               }
           })
       }
   }
}
</script>
<style scoped>
.robot-wrapper{
    width: 50%;
    margin: 20px;
}
.robot-item {
    margin: 20px 0;
    display: flex;
}
.title {
    width: 100px;
}
.robot-btn {
    float: right;
}
</style>