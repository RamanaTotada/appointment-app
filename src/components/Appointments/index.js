import {Component} from 'react'
import {format} from 'date-fns'

import {v4 as uuidv4} from 'uuid'
import AppointmentItem from '../AppointmentItem'
import './index.css'

class Appointments extends Component {
  state = {appointmentList: [], title: '', date: '', isFavorite: false}

  onChangetitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeDate = event => {
    this.setState({date: event.target.value})
  }

  addAppointment = event => {
    event.preventDefault()

    const {title, date} = this.state

    const dateFormat = date
      ? format(new Date(2021, 19, 7), 'dd MMMM yyyy, EEEE')
      : ''

    const newAppointment = {
      id: uuidv4(),
      titles: title,
      dates: dateFormat,
      isFavorite: false,
    }
    this.setState(prevState => ({
      appointmentList: [...prevState.appointmentList, newAppointment],
      title: '',
      date: '',
    }))
  }

  render() {
    const {title, date, appointmentList} = this.state
    return (
      <div className="main-container">
        <div className="inner-container">
          <div className="inner-container-top-part">
            <form className="input-container">
              <h1 className="appointment-heading">Add Appointment</h1>
              <label htmlFor="forNameInput">TITLE</label>

              <input
                type="text"
                id="forNameInput"
                onChange={this.onChangetitle}
                value={title}
                placeholder="title"
              />

              <label htmlFor="forDateInput">DATE</label>

              <input
                type="date"
                id="forDateInput"
                onChange={this.onChangeDate}
                value={date}
              />

              <button
                type="submit"
                className="button"
                onClick={this.addAppointment}
              >
                Add
              </button>
            </form>
            <img
              alt="appointments"
              className="image-style"
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png "
            />
          </div>
          <hr className="hr-line" />

          <div className="lower-part">
            <div className="lower-top-container">
              <h3 className="Appointments-heading-lower">Appointments</h3>
              <button type="button" className="button-style">
                started
              </button>
            </div>

            <ul className="appointment-list-container">
              {appointmentList.map(eachAppointment => (
                <AppointmentItem
                  appointmentDetails={eachAppointment}
                  key={eachAppointment.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments
