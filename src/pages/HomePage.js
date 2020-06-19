/* This page coitain a visual part of the main page */

import React from 'react';

import './styles/HomePage.css';

import FormConsult from '../components/FormConsult';
import ResultState from '../components/ResultState';

const logowRestriccion = 'https://i.ibb.co/C5X4W9Q/Do1Feliz.png';
const logoRestriccion = 'https://i.ibb.co/yRChXk1/donnopiede.png';
const penalty = 'http://www.amt.gob.ec/index.php/servicios/hoy-no-circula.html';

function HomePage(props) {
  const { data } = props;
  const { eventsFielForms } = props;
  const { eventsClick } = props;
  const { eventsForms } = props;
  const { conditional } = props;
  const penaltyMessage = 'Review the fine values';

  return (
    <div className='container'>
      <div className='container__predictor'>
        {conditional.value === 'wORestricctions' && (
          <ResultState
            Message={conditional.message}
            Warning={conditional.warning}
            Img={logowRestriccion}
          />
        )}
        {conditional.value === 'Restricctions' && (
          <ResultState
            Message={conditional.message}
            Warning={conditional.warning}
            Img={logoRestriccion}
            MessagePenalty={penaltyMessage}
            Link={penalty}
          />
        )}
      </div>

      <div className='container__form'>
        <FormConsult
          onChange={eventsFielForms}
          fromValues={data}
          handleClick={eventsClick}
          handleSubmit={eventsForms}
        />
      </div>
    </div>
  );
}
export default HomePage;
