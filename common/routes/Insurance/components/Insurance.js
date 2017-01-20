import React from 'react'
import { Control, Form } from 'react-redux-form'
import { browserHistory } from 'react-router'
import insuranceList from '../insuranceList'

const handleSubmit = (val) => {
  console.log('DONE Form data', val) // this would normally save to server if we had a server
  browserHistory.push('/Done');

}

const DentalHistory = (props) => (
  <div className="row">
    <h5 className="m-1">Last Question. Please select your insurance if you have one.</h5>
    <Form className="col s12" model='user' onSubmit={(val) => handleSubmit(val)}>
          <div>Insurance:</div>
          <Control.select required className='browser-default' model='.insuranceProvider'>
            {insuranceList.map((insurance, index) => (
              <option value={insurance}>{insurance}</option>
            ))}
          </Control.select>
      <div>
        <button onClick={browserHistory.goBack} className='float-left m-2 btn waves-effect waves-light'>Back</button>
        <button type='submit' className='float-right m-2 btn waves-effect waves-light'>DONE</button>
      </div>
    </Form>
  </div>
)


export default DentalHistory
