import React, { Component } from 'react'
import MemberListContainer from './containers/MemberListContainer'
import ProfileContainer from './containers/ProfileContainer'
import {Col, Panel, Row, Grid} from 'react-bootstrap'

class App extends Component {
  constructor() {
    super()
    this.state = {
      // Holds the id of the member that is currently selected in the left menu.
      // Is set to null if no member is selected
      selectedMemberId: null,

      // Contains the github user url of the selected member
      selectedMemberUrl: null,
    }
  }

  // Sets selectedMemberId and selectedMemberUrl to the currently selected member.
  // It's curried so it can select the members array from MembersList and the
  // id from MemberListItem.
  setSelectedMember = (members) => (id) => {
    const selectedMember = members.find(member => member.id === id)
    if(selectedMember){
      this.setState({selectedMemberId: selectedMember.id, selectedMemberUrl: selectedMember.url})
    }
  }

  render() {
    const {selectedMemberId, selectedMemberUrl} = this.state
    return (
      <Grid>
        <Row>
          <Col sm={3}>
            <div className="panel panel-primary">
              <div className="panel-heading">Code42 Members</div>
              <MemberListContainer
                selectedMemberId={selectedMemberId}
                setSelectedMember={this.setSelectedMember}
              />
            </div>
          </Col>
          <Col sm={8} smOffset={1}>
            <Panel bsStyle="primary">
              <ProfileContainer
                memberUrl={selectedMemberUrl}
              />
            </Panel>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default App
