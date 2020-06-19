/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
import React from 'react';

import './styles/FormConsult.css';

class FormConsult extends React.Component {
  render() {
    return (
      <>
        <form className='form' onSubmit={this.props.handleSubmit}>
          <div className='form__group'>
            <label>ENTER YOUR LICENSE PLATE</label>
            <input
              onChange={this.props.onChange}
              className='form__group-control'
              type='text'
              placeholder='PDB197 or PDB1977'
              name='Plate'
              value={this.props.fromValues.Plate}
              maxLength='7'
              required
              pattern='[A-z]{3}[0-9]{3,4}'
              title='Enter a valid license plate (PDB197 or PDB1977)'
            />
          </div>

          <div className='form__group'>
            <label>ENTER DE DATE</label>
            <input
              onChange={this.props.onChange}
              className='form__group-control'
              type='date'
              name='Date'
              value={this.props.fromValues.Date}
              min='1000-01-01'
              max='3000-12-31'
              required
              title='Enter a valid Date (mm/dd/yyyy)'
            />
          </div>

          <div className='form__group'>
            <label>ENTER THE TIME</label>
            <input
              onChange={this.props.onChange}
              className='form__group-control'
              type='time'
              placeholder='HORA'
              name='Hour'
              value={this.props.fromValues.Hour}
              required
              title='Enter a valid Time (HH:MM)'
            />
          </div>

          <button onClick={this.props.handleClick} className='btn-primary'>
            CHECK
          </button>
        </form>
      </>
    );
  }
}

export default FormConsult;
