import React from 'react'
import {connect} from 'react-redux'
// import {ModalContainer, ModalDialog} from 'react-modal-dialog'

import {clearError} from '../actions'

function Error (props) {
  // function handleClose () {
  //   props.clearError()
  // }

  return (
    <div>
      <h1>{props.errorMessage}</h1>
      <h1>{props.validationError}</h1>
    </div>
  )
}

function mapStateToProps (state) {
  return {
    errorMessage: state.error,
    validationError: state.errors.message
  }
}

function mapDispatchToProps (dispatch) {
  return {
    clearError: () => dispatch(clearError())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Error)
