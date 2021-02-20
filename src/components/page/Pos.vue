<template>
    <div class="Pos">
        <el-row>
            <el-col :span="7" class="pos-order" id="order-list">
                <el-tabs>
                    <el-tab-pane label="点餐">
                       <el-table border style="width:100%;"  :data="tableData">
                           <!-- prop=""读取数据的属性 -->
                           <el-table-column prop="goodsName" label="商品名称"></el-table-column>
                           <el-table-column prop="count" label="数量" width="50"></el-table-column>
                           <el-table-column prop="price" label="金额" width="70"> </el-table-column>
                           <el-table-column  label="操作" width="100" fixed="right">
                                <template slot-scope="scope">
                                    <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                                    <el-button type="text" size="small">编辑</el-button>
                                </template>
                           </el-table-column>
                       </el-table>
                    </el-tab-pane>
                    <el-tab-pane label="挂单">
                        挂单
                    </el-tab-pane>
                    <el-tab-pane label="外卖">
                        外卖
                    </el-tab-pane>
                </el-tabs>
            </el-col>
            <el-col  :span="17"   class="activeinput">
                <!-- 表单 -->
                <div>
                    <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="活动名称">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="活动区域">
                        <el-select v-model="form.region" placeholder="请选择活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="活动时间">
                        <el-col :span="11">
                        <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                        </el-col>
                        <el-col class="line" :span="2">-</el-col>
                        <el-col :span="11">
                        <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="即时配送">
                        <el-switch v-model="form.delivery"></el-switch>
                    </el-form-item>
                    <el-form-item label="活动性质">
                        <el-checkbox-group v-model="form.type">
                        <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                        <el-checkbox label="地推活动" name="type"></el-checkbox>
                        <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                        <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label="特殊资源">
                        <el-radio-group v-model="form.resource">
                        <el-radio label="线上品牌商赞助"></el-radio>
                        <el-radio label="线下场地免费"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="活动形式">
                        <el-input type="textarea" v-model="form.desc" ></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">立即创建</el-button>
                        <el-button>取消</el-button>
                    </el-form-item>
                </el-form>
                </div>
                 <div class="learntable">
                    <vxe-table
                        border
                        show-header-overflow
                        show-overflow
                        highlight-hover-row
                        :align="allAlign"
                        :data="tableData">
                        <vxe-table-column type="seq" title="序号" width="60"></vxe-table-column>
                        <vxe-table-column field="name" title="Name"></vxe-table-column>
                        <vxe-table-column field="sex" title="Sex"></vxe-table-column>
                        <vxe-table-column field="age" title="Age"></vxe-table-column>
                        <vxe-table-column field="address" title="Address"></vxe-table-column>
                    </vxe-table>
                </div>
            </el-col>
          
        </el-row>
        <el-row>
            
        </el-row>
    </div>
</template>
<script>
export default {
    name:'Pos',
    // order-list
    methods:{

    },
    data(){
        return{
            tableData:[
                {
                 goodsName:'冰激凌',
                 count:'1',
                 price:'100'
                }
            ],
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            },
            allAlign: null,
            tableData: [
            { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'vxe-table 从入门到放弃' },
            { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
            { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
            { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women ', age: 24, address: 'Shanghai' }
            ]
        }
    },
    mounted:function(){
        var orderHeight=document.body.clientHeight;
        console.log(orderHeight);
        document.getElementById('order-list').style.height=orderHeight+'px'
    },
     methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
}
</script>
// scoped 局部变量 只在本页面起作用
<style scoped>
.pos-order{
    background-color:#F9FAFC;
    border-right:1px solid  #C0CCDA;
}
.activeinput{
    margin-top:3%;
    display:flex
}
.learntable{
    margin-left:5%;
    margin-right:2%;
    width:60%;
}
.line{
    text-align: center;
    color:#666;
}
/* 去掉多行文本框右下角的斜线 */
.el-textarea .el-textarea__inner{
  resize: none;
} 

</style>