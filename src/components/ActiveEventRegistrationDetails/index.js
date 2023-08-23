// Write your code here

const registrationEventStatus = {
  yetToRegister: 'YET_TO_REGISTER',
  registrationDone: 'REGISTERED',
  registrationClosed: 'REGISTRATIONS_CLOSED',
}
const ActiveEventRegistrationDetails = props => {
  const {activeStatusConstants} = props

  const registrationInitial = () =>
    +(
      <div>
        <p>click on an event, to view its registration details</p>
      </div>
    )

  const registrationYetToRegister = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to resgister"
      />
      <p>
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love
      </p>
      <button type="button" className="register-btn">
        Register Here
      </button>
    </div>
  )

  const registered = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
      />
      <p>You have already registered for the event</p>
    </div>
  )

  const registrationClose = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
      />
      <h1>Registrations are Closed Now!</h1>
      <p>Stay tuned. We will reopen registrations soon!</p>
    </div>
  )

  const activeEventRegistrationDetails = () => {
    switch (activeStatusConstants) {
      case registrationEventStatus.yetToRegister:
        return registrationYetToRegister()
      case registrationEventStatus.registrationDone:
        return registered()
      case registrationEventStatus.registrationClosed:
        return registrationClose()
      default:
        return registrationInitial()
    }
  }

  return <div>{activeEventRegistrationDetails()}</div>
}

export default ActiveEventRegistrationDetails
