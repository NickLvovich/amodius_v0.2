import React from 'react';
import {Col, NavLink} from 'reactstrap';

const ServiceBox = ({ services }) => {
  return (
    <>
      {services.map((service, key) => (
        <Col key={key} lg={4} md={6}>
          <NavLink href="#getInTouch" className="service-box service-warning">
            <div className="mb-5">{service.icon}</div>
            <h5 className="service-title text-dark font-weight-normal pt-1 mb-4">
                {service.title}
            </h5>
            <p className="text-muted service-subtitle mb-4">{service.desc}</p>
          </NavLink>
        </Col>
      ))}
    </>
  );
};

export default ServiceBox;
