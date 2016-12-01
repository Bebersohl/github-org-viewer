import React, { PropTypes } from 'react'
import { Alert } from 'react-bootstrap'

// Component that displays bootstrap alerts.
// Text is the message you want to display and type is the bootstrap class
// for which kind of alert you want.
const Message = ({ text, type }) => (
  <Alert bsStyle={type} className="text-center">
    {text}
  </Alert>
)

Message.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default Message
