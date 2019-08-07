import React from 'react'
export default class MyStudentList extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div>
                <h3>学生列表</h3>
                <table>
                    <thead>
                        <tr>
                            <th>姓名</th>
                            <th>性别</th>
                            <th>年龄</th>
                            <th>籍贯</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.list.map((stu,i)=>{
                            return(
                                <tr key={i}>
                                    <td>{stu.sname}</td>
                                    <td>{stu.sex}</td>
                                    <td>{stu.age}</td>
                                    <td>{stu.home}</td>
                                    <td>
                                        <button onClick={()=>this.props.deleteStu(i)}>删除</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}