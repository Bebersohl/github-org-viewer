import React, { PropTypes } from 'react'
import '../css/ProfileHeader.css'

const ProfileHeader = ({name, login}) => (
  <div className="profile-header">
    {name
      ? <h1>{name} <small className="text-muted">{login}</small></h1>
      : <h1>{login}</h1>
    }
  </div>
)

ProfileHeader.propTypes = {
  name: PropTypes.string,
  login: PropTypes.string.isRequired
}

export default ProfileHeader
