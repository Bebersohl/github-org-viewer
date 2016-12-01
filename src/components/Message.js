import React, { PropTypes } from 'react'
import { Alert } from 'react-bootstrap'

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
