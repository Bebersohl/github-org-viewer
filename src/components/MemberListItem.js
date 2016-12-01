import React, { PropTypes } from 'react'
import { ListGroupItem } from 'react-bootstrap'

// setSelectedMember sets selectedMemberId in App.js to the id of whichever
// MemberListItem is clicked.
const MemberListItem = ({ children, id, setSelectedMember, selectedMemberId }) => (
  <ListGroupItem
    className={id === selectedMemberId ? ' active' : ''}
    onClick={() => setSelectedMember(id)}
  >
    {children}
  </ListGroupItem>
)

MemberListItem.propTypes = {
  children: React.PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  selectedMemberId: PropTypes.number,
  setSelectedMember: PropTypes.func.isRequired
}

export default MemberListItem
