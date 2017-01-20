import React from 'react'
import { Control, Form } from 'react-redux-form'
import { browserHistory } from 'react-router'
import questions from '../questions'

const handleSubmit = (val) => {
  console.log('Saved Form data', val) // this would normally save to server if we had a server
  browserHistory.push('/SelectDoctor');
}

const DentalHistory = (props) => (
  <div className="row">
    <h5 className="m-1">Please select an image for any of the following that apply.</h5>
    <Form className="col s12" model='user' onSubmit={(val) => handleSubmit(val)}>
      {questions.map((question, index) => (
        <div className="m-3 clearfix" key={index}>
          <div>Select an image for "{question}"</div>
          <div className="file-field input-field">
            <div className="btn">
              <span>Upload Image</span>
              <Control.file
                id={question}
                model={`.goals[${question}]`}
              />
            </div>
            <div className="file-path-wrapper">
              <input className="file-path validate" type="text"/>
            </div>
          </div>
        </div>
      ))}
      <div>
        <button onClick={browserHistory.goBack} className='float-left m-2 btn waves-effect waves-light'>Back</button>
        <button type='submit' className='float-right m-2 btn waves-effect waves-light'>Next</button>
      </div>
    </Form>
  </div>
)


export default DentalHistory
