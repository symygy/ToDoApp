import React, { Component } from 'react';
import Todos from './todos';
import AddTodo from './AddTodo';

class App extends Component {
  
  state = {
    todos: [
      {id: 1, content: 'buy some milk'},
      {id: 2, content: 'play mario cart'}
    ]
  }

  deleteTodo = (id) => {
    const new_todos = this.state.todos.filter(todo => {
      return todo.id !==id
    });
    this.setState({todos: new_todos})
  }

  addTodo = (todo) =>{
    todo.id = Math.random();
    let new_todos = [...this.state.todos, todo]
    this.setState({todos: new_todos})
  }
  
  render() {
    return (
      <div className="todo-app container">         
            <h1 className="center blue-text">Lista rzeczy do zrobienia </h1>   
            <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
            <AddTodo addTodo={this.addTodo}/>     
      </div>
    );
  }
}

export default App;
