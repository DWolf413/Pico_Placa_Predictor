/* eslint-disable radix */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import HomePage from './HomePage';

class HomePageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        Plate: '',
        Date: '',
        Hour: '',
      },

      picoplacaDates: {
        '0': [1, 2], //Monday
        '1': [3, 4], //Tuesday
        '2': [5, 6], //Wednesday
        '3': [7, 8], //Thurday
        '4': [9, 0], //Friday
        '5': [], //Saturday
        '6': [], //Sunday
      },

      conditionals: {
        value: '',
        message: '',
        warning: '',
      },
    };
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleClick = (e) => {
    console.log('Button was clicked');
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form was submmited');
    this.findDay();
  };

  findDay() {
    this.day = new Date(this.state.form.Date).getDay();
    this.numberPlate = parseInt(this.state.form.Plate.substr(-1));
    if (this.state.picoplacaDates[this.day].includes(this.numberPlate)) {
      this.findHour();
    } else {
      console.log('No hay pico y place');
      this.setState({
        conditionals: {
          value: 'wORestricctions',
          message:
            `Your vehicle with ${
              this.state.form.Plate
            } plate license can road without restriction on ${
              this.state.form.Date}`,
          warning: 'Drive with Caution',
        },
      });
    }
  }

  findHour() {
    this.hour =
      parseFloat(this.state.form.Hour.substr(0, 2)) +
      parseFloat(this.state.form.Hour.substr(3, 2)) / 60;

    if (this.hour < 7) {
      this.setState({
        conditionals: {
          value: 'wORestricctions',
          message:
            `Your vehicle with ${
              this.state.form.Plate
            } plate license can road until 7:00 on ${
              this.state.form.Date}`,
          warning:
            `Remember on ${
              this.state.form.Date
            } your car has restriction in the following schedule 7:00 to 9:30 and 16:00 to 19:30`,
        },
      });
      console.log('Puedes circular hasta las 7');
    } else if (this.hour >= 7 && this.hour < 9.5) {
      this.setState({
        conditionals: {
          value: 'Restricctions',
          message:
            `Your vehicle with ${
              this.state.form.Plate
            } plate license can not road until 9:30 on ${
              this.state.form.Date}`,
          warning:
            `Remember on ${
              this.state.form.Date
            } your car has restriction in the following schedule 7:00 to 9:30 and 16:00 to 19:30`,
        },
      });
      console.log('No pudes circulasr hasta las 9:30');
    } else if (this.hour >= 9.5 && this.hour < 16) {
      this.setState({
        conditionals: {
          value: 'wORestricctions',
          message:
            `Your vehicle with ${
              this.state.form.Plate
            } plate license can road until  16:00 on ${
              this.state.form.Date}`,
          warning:
            `Remember on ${
              this.state.form.Date
            } your car has restriction in the following schedule 7:00 to 9:30 and 16:00 to 19:30`,
        },
      });
      console.log('Puedes Circular hasta las 16:00');
    } else if (this.hour >= 16 && this.hour < 19.5) {
      this.setState({
        conditionals: {
          value: 'Restricctions',
          message:
            `Your vehicle with ${
              this.state.form.Plate
            } plate license can not road until 19:30 on ${
              this.state.form.Date}`,
          warning:
            `Remember on ${
              this.state.form.Date
            } your car has restriction in the following schedule 7:00 to 9:30 and 16:00 to 19:30`,
        },
      });
      console.log('No pudes circular hasta las 19h30');
    } else {
      this.setState({
        conditionals: {
          value: 'wORestricctions',
          message:
            `Your vehicle with ${
              this.state.form.Plate
            } plate license can road on ${
              this.state.form.Date
            } after 19:30`,
          warning:
            `Remember on ${
              this.state.form.Date
            } your car has restriction in the following schedule 7:00 to 9:30 and 16:00 to 19:30`,
        },
      });
      console.log('Puedes circular normalemnte');
    }
  }

  render() {

    return (
      <HomePage
        data={this.state.form}
        eventsClick={this.handleClick}
        eventsFielForms={this.handleChange}
        eventsForms={this.handleSubmit}
        conditional={this.state.conditionals}
      />
    );
  }
}

export default HomePageContainer;
