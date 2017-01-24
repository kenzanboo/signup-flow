import React from 'react'
import { Control, Form } from 'react-redux-form'
import { browserHistory } from 'react-router'

const handleSubmit = (val) => {
  console.log('DONE Form data', val) // this would normally save to server if we had a server
}

const DentalHistory = (props) => (
  <div className="row">
    <h5 className="m-1">Congrats! You're done. </h5>

    <div className="progress">
      <div className="determinate" style={{width: '100%'}}></div>
    </div>
    <a href="http://github.com/kenzanboo">Head Over to Github to look at the code for this sample project</a>
  </div>
)


export default DentalHistory
