import React, {Component} from 'react';

class AddTodo extends Component {
    
    state = {
        content: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state)
        this.setState({
            content: ''
        })
    }

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Dodaj nową pozycję:</label>
                    <input type="text" onChange={this.handleChange} value={this.state.content}></input>
                </form>
            </div>
        )
    }
}

export default AddTodo;