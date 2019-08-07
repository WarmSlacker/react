import React from 'react'
export default class MyProductList extends React.Component{
    //不是所有数据
      url='http://www.codeboy.com/data/product/list.php?pno='
      pno=0;//要加载的分页号
    constructor(){
        super()
        this.LoadMore=this.LoadMore.bind(this)
        this.state={
            list:[]
        }
    }
    LoadMore(){
      this.pno++
      fetch(this.url+this.pno).then(result=>{
        return  result.json()
    }).then((data)=>{
     let list=this.state.list
     list=list.concat(data.data)
     this.pno=data.pno
      this.setState({list})
      })
    }
    
    componentDidMount(){
         fetch(this.url).then(result=>{
               return  result.json()
           }).then((data)=>{
            let list=data.data
            this.pno=data.pno
             this.setState({list})
             })
      
}
    render(){
        return(
            <div>
                <h2>商品列表</h2>
                <ul>
                    {
                        this.state.list.map((p,i)=>{
                            return (
                            <li key={i}>{p.title}</li>
                            )
                        })
                    }
                </ul>
                <button onClick={this.LoadMore}>加载更多</button>
            </div>
        )
    }

}