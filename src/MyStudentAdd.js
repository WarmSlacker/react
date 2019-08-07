import React from 'react'
export default class MstudentAdd extends React.Component{
    constructor(){
   super()
   this.doSnameChange=this.doSnameChange.bind(this)
   this.doAgeChange=this.doAgeChange.bind(this)
   this.doHomeChange=this.doHomeChange.bind(this)
   this.doSexChange=this.doSexChange.bind(this)
   this.doSave=this.doSave.bind(this)
   this.state={
       sname:'',
       sex:'女',
       age:'',
       home:'郑州'
   }
    }
    doSnameChange(e){
      let inputValue=e.target.value;
      inputValue=inputValue.toUpperCase()
      this.setState({
          sname:inputValue
      })
    }
    doAgeChange(e){
        let age=e.target.value
        age=parseInt(age)
        age=isNaN(age) ? '': age
        this.setState({
            age:age
        })
    }
    doHomeChange(e){
      let home=e.target.value
      this.setState({
          home:home
      })
    }
    doSexChange(e){
        //注意:onChange事件对于radio只有备选中的才改变
      let sex=e.target.value
      console.log('doChanhge:',sex)
      this.setState({
          sex
      })
     }
     doSave(){
         //把输入好的数据传递给父组件
        this.props.saveStu(this.state)
        this.setState({
            sname:'',
            sex:'女',
            age:'',
            home:'郑州'
        })
     }
    render(){
        return(
            <div>
                <h3>添加学生</h3>
                <label htmlFor="sname">姓名:</label>
                <input id="sname" value={this.state.sname} onChange={this.doSnameChange}/>
                <br/>
                <label htmlFor="sex">性别:</label>
                <input type="radio" name="sex" value="男" checked={this.state.sex==='男'} onChange={this.doSexChange}/>男
                <input type="radio" name="sex" value="女" checked={this.state.sex==='女'} onChange={this.doSexChange}/>女
                <br/>
                <label htmlFor="age">年龄:</label>
                <input id="age" value={this.state.age} onChange={this.doAgeChange}/>
                <br/>
                <label htmlFor="home">籍贯:</label>
                <select id="home" value={this.state.home} onChange={this.doHomeChange}>
                    <option value="上海">上海</option>
                    <option value="北京">北京</option>
                    <option value="河南">河南</option>
                    <option value="南京">南京</option>
                    <option value="郑州">郑州</option>
                </select>
                <br/>
                <button onClick={this.doSave}>保存</button>
            </div>
        )
    }
}