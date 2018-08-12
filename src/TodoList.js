import React, { Component } from 'react';
import TodoItem from "./TodoItem";

class TodoList extends Component {

  constructor(props){
    super(props);

    this.state = {
      list: [],
      inputValue: ""
    }
// 通过构造函数的方式将方法绑定给木块本身,提高性能
    this.handleBtnClick = this.handleBtnClick.bind(this); 
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);

  }

  handleBtnClick() {

    if (this.state.inputValue) {
      this.setState({
          list:[...this.state.list,this.state.inputValue],
          inputValue: ""
        })
    }
  }

  handleInputChange(e) {
      this.setState({
        inputValue: e.target.value
      })
  }

  handleDelete(index) {
    // 通过复制的方式操作属性值,良好的编码方式,不推荐直接修改state的属性值
    const list = [...this.state.list];
    list.splice(index,1);
    this.setState({
        list
    })
  }
// 父模块通过属性的方式向子模块传递参数
// 子模块通过函数的方式向父模块传递参数
  render() {
    return (
      <div>
        <input style={{color:'red'}} value={this.state.inputValue} onChange={this.handleInputChange}/>
        <bottun style={{color:'red'}} onClick={this.handleBtnClick}>add</bottun>
        <ol>
        {
          this.state.list.map((item,index) =>{
            // 模块化,将li封装成另外一个模块
           return <TodoItem key={index} delete= {this.handleDelete} content= {item} index={index}/>
          })
        }
        </ol>
      </div>
    );
  }
}

export default TodoList;
