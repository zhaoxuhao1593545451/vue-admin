<template>
  <div>
    <el-form :inline="true" :model="model" class="demo-form-inline" label-width="70px">
      <el-row :gutter='16'>
        <el-col :span='4'>
          <el-form-item label="类型：">
            <el-select v-model="model.type" placeholder="请选择">
              <el-option
                v-for="item in options1"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span='6'>
          <el-form-item label="日期：">
            <el-date-picker
              style='width:100%'
              type="daterange"
              v-model="model.date"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span='4'>
          <el-form-item label="关键字：">
            <el-select v-model="model.key" placeholder="请选择">
              <el-option
                v-for="item in options2"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span='3'>
            <el-input v-model="model.text" placeholder="请输入内容" />
        </el-col>
        <el-col :span='2'>
          <el-button type='danger'>搜索</el-button>
        </el-col>
        <el-col :span='2'>
          <el-button type='danger'>新增</el-button>
        </el-col>
      </el-row>
    </el-form>
    <el-table
      border
      :data="tableData"
      style="width: 960px"
    >
      <el-table-column type="selection" width="60" />
      <el-table-column prop="title" label="标题" width="180" />
      <el-table-column prop="type" label="类别" width="180" />
      <el-table-column prop="date" label="日期" width="180" />
      <el-table-column prop="user" label="管理人" width="180" />
      <el-table-column label="操作" width="180">
        <template #default="scope">
          <el-button size="small" @click="handleEditBtn(scope.$index, scope.row)">编辑</el-button>
          <el-button size="small" type="danger" @click="handleDeleteBtn(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-row>
      <el-col :span='12'>
        <el-button type='danger' @click='handleDeleteSelectBtn'>批量删除</el-button>
      </el-col>
      <el-col :span='12'>
        <el-pagination
          background
          layout="total, sizes, prev, pager, next, jumper"
          :current-page="currentPage"
          :page-sizes="[10, 20, 30, 40, 50]"
          :page-size="currentPageSize"
          :total="400"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </el-col>
    </el-row>
    <el-dialog
      title="111"
      width="30%"
      v-model="visible"
      @close="handleClose"
    >
      <el-form :model="modelForm" label-width="80px">
        
        <el-form-item label="类别">
          <el-select v-model="modelForm.type" placeholder="请选择类别">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="标题">
          <el-input v-model="modelForm.title" />
        </el-form-item>
        <el-form-item label="概况">
          <el-input v-model="modelForm.mark" />
        </el-form-item>
      </el-form>      
      <template #footer>
        <span class="dialog-footer">
          <el-button type="primary" @click="visible = false">确认</el-button>
          <el-button @click="visible = false">取消</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import { ref, reactive } from 'vue';
import { confirm } from '@/utils/message';
export default {
  setup(){
    let model=reactive({
      type:'1',
      date:'',
      key:'id',
      text:''
    })
    const options1=reactive([
      {
        label: '国际信息',
        value: '1'
      }, 
      {
        label: '国内信息',
        value: '2'
      }, 
      {
        label: '行业信息',
        value: '3'
      }
    ])
    const options2=reactive([
      {
        label: 'ID',
        value: 'id'
      }, 
      {
        label: '标题',
        value: 'title'
      },
    ])
    const tableData=reactive([
      {title:'标题1',type:'类别1',date:'2022-07-13',user:'李四'},
      {title:'标题2',type:'类别2',date:'2022-07-13',user:'张三'},
      {title:'标题3',type:'类别3',date:'2022-07-13',user:'王五'},
      {title:'标题4',type:'类别4',date:'2022-07-13',user:'二蛋'},
    ])
    const currentPage=ref(1);
    const currentPageSize=ref(10);
    const total=ref(100);
    const handleSizeChange=(val)=> {
      currentPageSize.value=val;
    }
    const handleCurrentChange=(val)=> {
      currentPage.value=val;
    }
    const handleEditBtn=(index,row)=> {
      visible.value=true;
      for(let key in row){
        modelForm[key]=row[key]
      }
      console.log(row,modelForm)
    }
    const handleDeleteBtn=(index,row)=> {
      confirm({
        content:'确定删除么?',
        tip:'提示',
        msg:'删除成功'
      }).then(()=>{
        console.log('删除成功')
      })
    }
    const handleDeleteSelectBtn=(index,row)=> {
      confirm({
        content:'确定删除么?',
        tip:'提示',
        msg:'删除成功'
      }).then(()=>{
        console.log('删除成功')
      })
    }
    const visible=ref(false);
    const handleClose=()=> {
      visible.value=false;
    }
    const testVisible=ref(false)
    let modelForm=reactive([
      {
        type: '',
        title: '',
        mark: ''
      }, 
    ])
    return{
      model,options1,options2,tableData,currentPage,currentPageSize,total,visible,testVisible,modelForm,
      handleCurrentChange,handleSizeChange,handleEditBtn,handleDeleteBtn,handleDeleteSelectBtn,handleClose
    }
  }
}
</script>

<style lang="scss" scoped>
  :global(.el-checkbox){
    margin-left: 10px;
  }
</style>