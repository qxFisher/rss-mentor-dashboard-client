import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        "tasks": [],
        "mentors": [],
      },
    };
  }

  componentDidMount() {
    const url = 'http://localhost:8000/api/data';
    fetch(url)
    .then(response => response.json())
    .then(data => this.setState({data: data}));
  }

  render() {

    const data = this.state.data;
    console.log(data);
    return (
      <ul>
        {data.tasks.map(task =>
          <li key={task.taskName}>
            {task.taskName}
          </li>
        )}
      </ul>
    );
  }
}

export default App;
