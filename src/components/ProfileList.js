import React, { PropTypes } from 'react'
import '../css/ProfileList.css'

const ProfileList = ({ title, list, itemName }) => (
  <div className="profile-list">
    <h4>{title}</h4>
    <ul>
      {list.map(item =>
        <li key={item.id}>{item[itemName]}</li>
      )}
    </ul>
  </div>
)

ProfileList.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
  itemName: PropTypes.string.isRequired
}

export default ProfileList
