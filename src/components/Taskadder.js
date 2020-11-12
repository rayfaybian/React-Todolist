import React, { Component } from 'react';
import styles from './Taskadder.module.css';

class Taskadder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  handleChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  addTask = () => {
    if (!this.state.inputValue == '') {
      this.props.ontaskAdded(this.state.inputValue);
      this.setState({ inputValue: '' });
    }
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleChange}
          className={styles.input}
          placeholder="Enter new todo"
        />
        <button className={styles.save} onClick={this.addTask}>
          Save
        </button>
      </div>
    );
  }
}

export default Taskadder;
