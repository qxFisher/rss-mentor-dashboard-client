import React, { Component } from 'react';
import Select from 'react-select';
import Table from './components/table/table';
import _ from 'lodash';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        "tasks": [],
        "mentors": [],
      },
      selectedOption: JSON.parse(localStorage.getItem('mentor'))
    };
  }

  handleChange = (selectedOption) => {
    localStorage.setItem('mentor', JSON.stringify(selectedOption));
    this.setState({ selectedOption });
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
      <div key={_.uniqueId('div_')} className='container'>
        <Select
          key={_.uniqueId('td_')}
          value={selectedOption}
          onChange={this.handleChange}
          options={options}
        />
        <Table
          key={_.uniqueId('table_')}
          data={data}
          selectedOption={selectedOption}
        />
      </div>
    );
  }
}

export default App;
