import React, { PropTypes } from 'react'
import ProfileHeader from './ProfileHeader'
import { Col, Row, Glyphicon } from 'react-bootstrap'
import dateFormat from 'dateformat'
import '../css/ProfileInfo.css'

const ProfileInfo = ({email, location, createdAt, followers, ...rest}) => (
  <Col sm={12} className="profile-info">
    <Row>
      <ProfileHeader {...rest}/>
    </Row>
    <Row>
      <div className="text-right pull-right">
        <p><Glyphicon glyph="calendar" /> Joined: {dateFormat(createdAt, 'dd-mm-yyyy')}</p>
        <p><Glyphicon glyph="user" /> Followers: {followers}</p>
      </div>
      <div>
        <p><Glyphicon glyph="envelope" /> {email ? email : 'n/a'}</p>
        <p><Glyphicon glyph="home" /> {location ? location : 'n/a'}</p>
      </div>
    </Row>
  </Col>
)

ProfileInfo.propTypes = {
  email: PropTypes.string,
  location: PropTypes.string,
  createdAt: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
}

export default ProfileInfo
