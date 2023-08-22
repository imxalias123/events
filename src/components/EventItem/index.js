// Write your code here
import './index.css'

const EventItem = props => {
  const {eachEvent, isActive, onClickEvent} = props

  const {imageUrl, name, location, id} = eachEvent
  const activeEventClassName = isActive ? 'active-event' : 'inactive'

  const onClickImg = () => {
    onClickEvent(id)
  }

  return (
    <li>
      <button type="button" onClick={onClickImg} className="event-btn">
        <img src={imageUrl} alt="event" className={activeEventClassName} />
      </button>

      <p>{name}</p>
      <p>{location}</p>
    </li>
  )
}

export default EventItem
