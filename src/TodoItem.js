import React, { Component } from 'react';

class TodoItem extends Component {

	constructor(props){
		super(props);
		
		this.handleDelete = this.handleDelete.bind(this);
	}

	handleDelete (){
		this.props.delete(this.props.index);
	}

	render(){

		return (
			<li onClick= {this.handleDelete}>{this.props.content}</li>
		)
	}
}

export default TodoItem;