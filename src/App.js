import React, { Component } from 'react';
import Select from 'react-select';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        "tasks": [],
        "mentors": [],
      },
      selectedOption: null,
    };
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  }

  componentDidMount() {
    const url = 'http://localhost:8000/api/data';
    fetch(url)
    .then(response => response.json())
    .then(data => this.setState({data: data}));
  }

  render() {
    const { selectedOption } = this.state;
    const { data } = this.state;
    const options = data.mentors.map(item => ({ value: item.mentorGithub, label: `${item.mentorName} (${item.mentorGithub})`}));
    return (
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
      />
    );
  }
}

export default App;
