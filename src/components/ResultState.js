/* eslint-disable react/destructuring-assignment */

/* This componet coitan the result of the consult, this render with a specific condition */

import React from 'react';

import './styles/ResultState.css';

class ResultState extends React.Component {
  render() {
    return (
      <div className='containerResult'>
        <div className='containerResult__message'>
          <p>{this.props.Message}</p>
        </div>
        <div className='containerResult__img'>
          <img src={this.props.Img} alt='Don Evatisto' />
          <a href={this.props.Link}>{this.props.MessagePenalty}</a>
        </div>
        <div className='containerResult__warning'>
          <p>{this.props.Warning}</p>
        </div>
      </div>
    );
  }
}

export default ResultState;
