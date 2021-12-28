
import React from 'react';

import axios from 'axios';

export default class UsersList extends React.Component {
  state = {
    users: []
  }

  componentDidMount() {
    axios.get(`http://127.0.0.1:5000/users/`)
      .then(res => {
        const users = res.data;
        this.setState({ users });
      })
  }

  render() {
    return (
      <ul className="users">
        { this.state.users.map(person => <li>{users.name}</li>)}
      </ul>
    )
  }
}