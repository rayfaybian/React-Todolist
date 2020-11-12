import React, { Component } from 'react';
import styles from './Todo.module.css';
import { IoIosCloseCircleOutline } from 'react-icons/io';

class Todo extends Component {
  delete = () => {
    this.props.onDelete(this.props.id);
  };

  render() {
    return (
      <div className={styles.container}>
        <div>{this.props.title}</div>
        <div>{this.props.isDone}</div>
        <div onClick={this.delete}>
          <IoIosCloseCircleOutline className={styles.icon} />
        </div>
      </div>
    );
  }
}

export default Todo;
