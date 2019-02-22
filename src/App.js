import React, { Component } from 'react';
import Select from 'react-select';
import Table from './components/table/table';
import { fb } from './firebase.service';
import { GithubLoginButton } from "react-social-login-buttons";
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
      selectedOption: JSON.parse(localStorage.getItem('mentor')),
      user: null
    };

    fb.auth.onAuthStateChanged(user =>
      this.setState({ user: user
        ? { displayName: user.displayName, photoURL: user.photoURL }
        : null
      }));
  }

  login = () => {
    fb.login().then(({ user }) => {
      this.setState({ user });
    });
  }

  logout = () => {
    fb.logout().then(() => {
      this.setState({ user: null });
    });
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
    const { user, data } = this.state;
    let { selectedOption } = this.state;

    const options = data.mentors.map(item => ({ value: item.mentorGithub, label: `${item.mentorName} (${item.mentorGithub})`}));
  
    if(user && !selectedOption) {
      const authMentor = data.mentors.find(mentor => mentor.mentorName.toLowerCase() === user.displayName.toLowerCase());
      selectedOption = {
      value: authMentor.mentorGithub,
      label: `${authMentor.mentorName} (${authMentor.mentorGithub})`
      }
    }
    return (
      <div key={_.uniqueId('div_')} className='container'>
        <section className="login__wrapper">
          {user
            ? <GithubLoginButton onClick={this.logout} className='btn-login'>Logout ({user.displayName})</GithubLoginButton>
            : <GithubLoginButton onClick={this.login} className='btn-login'>Login</GithubLoginButton>
          }
        </section>
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
