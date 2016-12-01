import React, { PropTypes, Component } from 'react'
import MemberList from '../components/MemberList'
import Message from '../components/Message'
import 'whatwg-fetch'

// MemberListContainer handles state and async actions for MemberList.
class MemberListContainer extends Component {
  constructor() {
    super()
    this.state = {
      // Contains all users returned from the github api that is called once
      // the component mounts.
      members: [],
      // Is set to true if api is fetching and false otherwise.
      isLoading: true,
      // Holds a string if there is an error, null otherwise.
      error: null
    }
  }
  // Fetches inital data for MemberList.
  componentDidMount() {
    fetch('https://api.github.com/orgs/code42/members')
    .then(res => res.json())
    .then(json => {
      this.setState({
        members: json,
        isLoading: false
      })
    })
    .catch(err => {
      this.setState({error: `Oops, something went wrong: ${err}`})
    })
  }
  render() {
    const {isLoading, members, error} = this.state
    const {selectedMemberId, setSelectedMember} = this.props

    // Only displays MemberList if there is no error, the api has returned a result,
    // and if there are members in the array.
    if(error){
      return <Message text={error} type="danger"/>
    }
    if(isLoading){
      return <Message text="Loading..." type="info"/>
    }
    if(members.length === 0){
      return <Message text="No members" type="info"/>
    }
    return (
      <MemberList
        members={members}
        selectedMemberId={selectedMemberId}
        setSelectedMember={setSelectedMember}
      />
    )
  }
}

MemberListContainer.propTypes = {
  selectedMemberId: PropTypes.number,
  setSelectedMember: PropTypes.func.isRequired
}

export default MemberListContainer
