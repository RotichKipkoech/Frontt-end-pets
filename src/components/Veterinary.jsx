import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './vet.css';

function Veterinary() {
  const services = [
    {
      id: 1,
      name: 'Checkup',
      description: 'Regular health checkup for your pet.',
      price: 50,
    },
    {
      id: 2,
      name: 'Vaccination',
      description: 'Vaccination to protect against diseases.',
      price: 30,
    },
    {
      id: 3,
      name: 'Grooming',
      description: 'Grooming services to keep your pet clean and healthy.',
      price: 40,
    },
    {
      id: 4,
      name: 'Surgery',
      description: 'Surgical procedures if needed.',
      price: 150,
    },
    {
      id: 5,
      name: 'Dental Care',
      description: 'Dental checkup and cleaning for your pet.',
      price: 35,
    },
    {
      id: 6,
      name: 'Behavioral Training',
      description: 'Training sessions for pets with behavioral issues.',
      price: 60,
    },
    {
      id: 7,
      name: 'Pet Sitting',
      description: 'Pet sitting services for when you are away.',
      price: 70,
    },
    {
      id: 8,
      name: 'Emergency Care',
      description: 'Emergency medical care for your pet.',
      price: 100,
    },
    {
      id: 9,
      name: 'Microchipping',
      description: 'Microchipping services for pet identification.',
      price: 25,
    },
    {
      id: 10,
      name: 'Pet Insurance',
      description: 'Insurance plans for your pet\'s health.',
      price: 20,
    },
  ];
  const [bookings, setBookings] = useState({});
  const [selectedService, setSelectedService] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBookClick = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  const handleSave = () => {
    if (selectedDate && selectedTime) {
      const newBooking = {
        service: selectedService,
        date: selectedDate,
        time: selectedTime,
      };

      setBookings({ ...bookings, [selectedService.id]: newBooking });
    }
    setIsModalOpen(false);
  };

  return (
    <div>
      <h2>Veterinary Page</h2>
      {services.map((service) => (
        <div className="veterinary-service" key={service.id}>
          <h3>{service.name}</h3>
          <p>{service.description}</p>
          <p>Price: ${service.price}</p>
          <button onClick={() => handleBookClick(service)}>Book Now</button>

          {bookings[service.id] && (
            <div className="booking-info">
              <p>Date: {bookings[service.id].date.toLocaleDateString()}</p>
              <p>Time: {bookings[service.id].time}</p>
            </div>
          )}

          {selectedService && selectedService.id === service.id && isModalOpen && (
            <div className="booking-modal">
              <h3>Book {selectedService.name}</h3>
              <label htmlFor="date">Date:</label>
              <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="MM/dd/yyyy"
                minDate={new Date()}
                required
              />
              <br />
              <label htmlFor="time">Time:</label>
              <input
                type="time"
                id="time"
                value={selectedTime}
                onChange={handleTimeChange}
                required
              />
              <br />
              <button onClick={handleSave}>Save</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Veterinary;
