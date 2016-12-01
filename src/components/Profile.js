import React, { PropTypes } from 'react'
import ProfileInfo from './ProfileInfo'
import ProfileListContainer from '../containers/ProfileListContainer'
import { Col, Row, Image } from 'react-bootstrap'

// Profile displays the information of the currently selected user.
const Profile = ({ user }) => {
  const {repos_url, organizations_url, subscriptions_url, name, login, email, location,
    created_at, followers} = user
  return (
    <div>
      <Row>
        <Col sm={9}>
          <ProfileInfo
            name={name}
            login={login}
            email={email}
            location={location}
            createdAt={created_at}
            followers={followers}
          />
        </Col>
        <Col sm={3}>
          <Image src={user.avatar_url} responsive thumbnail />
        </Col>
      </Row>
      <Row>
        <Col sm={4}>
          <ProfileListContainer
            title="Repositories"
            listUrl={repos_url}
            itemName="name"
          />
        </Col>
        <Col sm={4}>
          <ProfileListContainer
            title="Organizations"
            listUrl={organizations_url}
            itemName="login"
          />
        </Col>
        <Col sm={4}>
          <ProfileListContainer
            title="Subscriptions"
            listUrl={subscriptions_url}
            itemName="name"
          />
        </Col>
      </Row>
    </div>
  )
}

Profile.propTypes = {
  user: React.PropTypes.shape({
    repos_url: PropTypes.string.isRequired,
    organizations_url: PropTypes.string.isRequired,
    subscriptions_url: PropTypes.string.isRequired,
    name: PropTypes.string,
    login: PropTypes.string.isRequired,
    email: PropTypes.string,
    location: PropTypes.string,
    created_at: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired
  }).isRequired
}

export default Profile
