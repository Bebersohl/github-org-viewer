import React, { PropTypes, Component } from 'react'
import ProfileList from '../components/ProfileList'
import Message from '../components/Message'

class ProfileListContainer extends Component {
  constructor() {
    super()
    this.state = {
      // Contains data from initial api call.
      list: [],
      isLoading: false,
      error: null
    }
  }

  componentDidMount() {
    this.setState({ isLoading: true })
    fetch(this.props.listUrl)
    .then(res => res.json())
    .then(json => this.setState({
      list: json,
      isLoading: false
    }))
    .catch(err => {
      this.setState({
        error: `Oops, something went wrong: ${err}`,
      })
    })
  }

  render() {
    const {isLoading, error, list} = this.state
    const {...props} = this.props
    if(error){
      return <Message text={error} type="danger"/>
    }
    if(isLoading){
      return <Message text="Loading..." type="info"/>
    }
    return <ProfileList list={list} {...props}/>
  }
}

ProfileListContainer.propTypes = {
  title: PropTypes.string.isRequired,
  listUrl: PropTypes.string.isRequired,
  itemName: PropTypes.string.isRequired,
}

export default ProfileListContainer
