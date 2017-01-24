import React from 'react'
import { Control, Form } from 'react-redux-form'
import { browserHistory } from 'react-router'
import questions from '../questions'

const handleSubmit = (val) => {
  console.log('Saved Form data', val) // this would normally save to server if we had a server
  browserHistory.push('/Goals');
}

const DentalHistory = (props) => (
  <div className="row">
    <h5 className="m-1">Just a few more questions about you and you'll be on your way.</h5>
    <div className="progress">
      <div className="determinate" style={{width: '45%'}}></div>
    </div>
    <Form className="col s12" model='deep.user' onSubmit={(val) => handleSubmit(val)}>
      {questions.map((question, index) => (
        <div key={index}>
          <div>{question}</div>
          <Control.select
            required
            className='browser-default'
            model={`.dentalHistoryQuestions[${question}]`}
            id={index}
          >
            <option value="">-</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            <option value="Unsure">Unsure</option>
          </Control.select>
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
