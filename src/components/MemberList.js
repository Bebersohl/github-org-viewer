import React, { PropTypes } from 'react'
import MemberListItem from './MemberListItem'
import { ListGroup } from 'react-bootstrap'

const MemberList = ({ members, setSelectedMember, ...rest}) => {
  return (
    <ListGroup>
      {members.map(member =>
        <MemberListItem
          key={member.id}
          id={member.id}
          setSelectedMember={setSelectedMember(members)}
          {...rest}
        >
          {member.login}
        </MemberListItem>
      )}
    </ListGroup>
  )
}

MemberList.propTypes = {
  members: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    login: PropTypes.string.isRequired
  }).isRequired).isRequired,
  selectedMemberId: PropTypes.number,
  setSelectedMember: PropTypes.func.isRequired
}

export default MemberList
