import React from 'react'
export default class MyButton extends React.Component{
    constructor(){
        super()
        console.log('mybutton.constructor')
    }
    // 加载
    componentWillMount(){
        console.log('componentWillMount')
    }
    // 挂载完成
    componentDidMount(){
        console.log('componentDidMount')
    }
    render(){
        console.log('render')
        return(
            <button>按钮</button>
        )
    }
}