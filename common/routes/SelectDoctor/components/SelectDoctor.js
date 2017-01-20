import React from 'react'
import { Control, Form, Field} from 'react-redux-form'
import { browserHistory } from 'react-router'
import images from '../images'

const handleSubmit = (val) => {
  console.log('Saved Form data', val) // this would normally save to server if we had a server
  browserHistory.push('/Insurance')
}


const SelectDoctor = (props) => (
  <div className="row">
    <h5 style={style.header} className="m-1">Please select your doctor:</h5>
    <Form className="col s12" model='user' onSubmit={(val) => handleSubmit(val)}>
      <Field required model=".selectedDoctor" className="field">
        {images.map((image, index) => (
          <p className="col s12 m4" key={index}>
            <input type="radio" id={image.name} value={image.name} required/>
            <label style={style.label} htmlFor={image.name}>
              {image.name}
              <img style={style.img} src={image.img} />

            </label>
          </p>
        ))}
      </Field>
      <div className="clearfix">
        <button onClick={browserHistory.goBack} className='float-left m-2 btn waves-effect waves-light'>Back</button>
        <button type='submit' className='float-right m-2 btn waves-effect waves-light'>Next</button>
      </div>
    </Form>
  </div>
)


const style = {
  img: {
    height: 160,
    width: 160,
    display: 'block'
  },
  header: {
    width: '100%'
  },
  label: {
    height: 195
  }
}
/*
 {images.map((image, index) => (
 <p key={index}>
 <input type="radio" id={image.name} />
 <label htmlFor={image.name}>{image.name}</label>
 </p>
 ))}
 */
export default SelectDoctor
