import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    
    let users = this.props.users.map((user, index) => 
      <li key={index}>{user.username}</li>
    )
    
    return (
      <div>
        <br></br>
        <br></br>
        <div>
          {this.props.userCount}
        </div>
        <br></br>
        <br></br>
        <ul>
          {users}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
    userCount: state.users.length
  }
}
      
export default connect(mapStateToProps)(Users)