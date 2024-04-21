import './index.css'
import {useState} from 'react'
import TicketSelection from '../TicketSelection'
import Payment from '../Payment'
import Notification from '../Notification'

const TicketBookingApp = () => {
  const [totalTickets, setTotalTickets] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)
  const [showNotification, setShowNotification] = useState(false)

  const handleBookTickets = ticketCount => {
    const pricePerTicket = 10 // Set your ticket price here
    const price = ticketCount * pricePerTicket
    setTotalTickets(ticketCount)
    setTotalPrice(price)
    setShowNotification(true)
  }

  return (
    <div className="bg-container">
      <h1 className="book-heading">Welcome To Book Tickets</h1>
      {!totalTickets ? (
        <TicketSelection onBook={handleBookTickets} />
      ) : (
        <>
          <Payment totalTickets={totalTickets} totalPrice={totalPrice} />
          {showNotification && (
            <Notification message="Tickets booked successfully!" />
          )}
        </>
      )}
    </div>
  )
}

export default TicketBookingApp
