import React from  'react'
import MyStudentAdd from './MyStudentAdd'
import MyStudentList from './MyStudentList'
export default class MyStudentManagement extends React.Component{
constructor(){
    super()
    this.doDeleteStu=this.doDeleteStu.bind(this)
    this.doSaveStu=this.doSaveStu.bind(this)
    this.state={
        stuList:[
            {sname:'dingding',sex:'男',age:20,home:'河南'},
            {sname:'nuannuan',sex:'女',age:20,home:'河南'},
            {sname:'wenwen',sex:'女',age:20,home:'河南'},
        ]
    }
}
doDeleteStu(index){
//根据下标删除学生
console.log('parent:',index)
let list=this.state.stuList
list.splice(index,1)
this.setState({//修改后的状态
    stuList:list
})
}
doSaveStu(stu){
let stuList=this.state.stuList
stuList.push(stu)
this.setState({
    stuList
})
}
render(){
    return(
    <div>
       <h1>学生管理系统</h1>
       <hr/> 
       <MyStudentAdd saveStu={this.doSaveStu}/>
       <MyStudentList list={this.state.stuList} deleteStu={this.doDeleteStu}/>
    </div>
    )
}
}