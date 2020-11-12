import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Taskadder from './components/Taskadder';
import Todo from './components/Todo';
import TodoList from './components/TodoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  componentDidMount() {
    let todos = [];
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((json) => {
        for (var i = 0; i < 4; i++) {
          let newTodo = { id: i, title: json[i].title, completed: false };
          todos.push(newTodo);
        }
        this.setState({ todos: todos });
      });
  }

  addTask = (value) => {
    let todo = {
      id: 1,
      title: value,
      completed: false,
    };
    let todos = this.state.todos;
    todos.push(todo);

    this.setState((todos = todos));
  };

  onDeleteTask = (id) => {
    let todos = this.state.todos;
    let index = todos.findIndex((todo) => todo.id == id);

    todos.splice(index, 1);

    this.setState({ todos: todos });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Taskadder ontaskAdded={this.addTask} />
        <TodoList todos={this.state.todos} onDelete={this.onDeleteTask} />
      </div>
    );
  }
}

export default App;
