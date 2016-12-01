import React, { PropTypes, Component } from 'react'
import MemberList from '../components/MemberList'
import Message from '../components/Message'
import 'whatwg-fetch'

class MemberListContainer extends Component {
  constructor() {
    super()
    this.state = {
      members: [],
      isLoading: true,
      error: null
    }
  }
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
