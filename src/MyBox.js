import React from 'react'
import MyButton from './MyButton';
export default class Mybox extends React.Component{
    constructor(){
        super()
        this.state={
            isButtonShow:true
        }
        console.log('myBox')
    }
//    渲染
    render(){
        setTimeout(()=>{
            this.setState({
                isButtonShow:false
            })
        },3000)
        console.log('render')
        if(this.state.isButtonShow){
                var el=<MyButton/>
        }else{
            var el=""
        }
        return(
          
            <div>
                {el}
            </div>
        )
    }
}