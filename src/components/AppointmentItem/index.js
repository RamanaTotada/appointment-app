import './index.css'

const AppointmentItem = props => {
  const {appointmentList} = props

  const {titles, dates, isFavorite} = appointmentList

  const imageUrl = isFavorite
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'

  return (
    <li className="each-appointment">
      <div className="appointment-name-date">
        <h4>{titles}</h4>
        <p>{dates}</p>
      </div>

      <img alt="star" className="star-image" src={imageUrl} />
    </li>
  )
}

export default AppointmentItem
