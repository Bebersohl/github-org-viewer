import React, { PropTypes, Component } from 'react'
import Profile from '../components/Profile'
import Message from '../components/Message'

// ProfileContainer handles state and async actions for Profile.
class ProfileContainer extends Component {
  constructor() {
    super()
    this.state = {
      // Contains user information of currently selected user
      user: null,
      // Is set to true if waiting for github api response
      isLoading: false,
      error: null
    }
  }

  // Fetches user info and updates state if it differs from current memberUrl
  componentWillReceiveProps(nextProps) {
    if (nextProps.memberUrl !== this.props.memberUrl) {
      this.setState({ isLoading: true })
      fetch(nextProps.memberUrl)
      .then(res => res.json())
      .then(json => this.setState({
        user: json,
        isLoading: false
      }))
      .catch(err => {
        this.setState({
          error: `Oops, something went wrong: ${err}`,
        })
      })
    }
  }





  render() {

    const {isLoading, user, error} = this.state

    if(error){
      return <Message text={error} type="danger"/>
    }
    if(isLoading){
      return <Message text="Loading..." type="info"/>
    }
    if(!user){
      return <Message text="Please select a member to view" type="info"/>
    }
    return <Profile user={user}/>
  }
}

ProfileContainer.propTypes = {
  memberUrl: PropTypes.string
}

export default ProfileContainer
