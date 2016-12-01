import React, { PropTypes } from 'react'
import '../css/ProfileList.css'

// Generic component that displays an unordered list.  Title is displayed
// above the list, list is the array of objects returned from the api call
// and itemName is the name of the property in list's objects you want to display.
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
