import React, { useState } from 'react';
import './services.css'; 

function Services() {
  const [selectedService, setSelectedService] = useState('');
  const [price, setPrice] = useState('');

  const services = [
    { name: 'Bathing', price: 15 },
    { name: 'Grooming', price: 25 },
    { name: 'Health Checkup', price: 30 },
    { name: 'Vaccination', price: 20 },
    { name: 'Dental Cleaning', price: 35 },
    { name: 'Training', price: 40 },
    { name: 'Boarding', price: 50 },
    { name: 'Pet Sitting', price: 45 },
    { name: 'Surgery', price: 100 },
    { name: 'Microchipping', price: 10 },
  ];

  const handleServiceChange = (e) => {
    const selectedService = e.target.value;
    setSelectedService(selectedService);

    // Find the price of the selected service
    const service = services.find((service) => service.name === selectedService);
    setPrice(service.price);
  };

  return (
    <div className="container">
      <h2 className="heading">Services Page</h2>

      <div className="select-container">
        <label htmlFor="services">Select a Service:</label>
        <select
          id="services"
          name="services"
          value={selectedService}
          onChange={handleServiceChange}
        >
          <option value="" disabled>
            Select a service
          </option>
          {services.map((service, index) => (
            <option key={index} value={service.name}>
              {service.name}
            </option>
          ))}
        </select>
      </div>

      {selectedService && (
        <div className="result">
          <h3>{selectedService}</h3>
          <p>Price: ${price}</p>
        </div>
      )}
    </div>
  );
}

export default Services;
