import React, { Component } from 'react';
import { Col } from "reactstrap";

class ServiceBox extends Component {
    render() {
        return (
            <React.Fragment>
                {
                    this.props.services.map((service, key) =>
                        <Col key={key} lg={4} md={6}>
                            <div className="service-box service-warning">
                                <div className="mb-5">
                                    {service.icon}
                                </div>
                                <h5 className="service-title text-dark font-weight-normal pt-1 mb-4">{service.title}</h5>
                                <p className="text-muted service-subtitle mb-4">{service.desc}</p>
                            </div>
                        </Col>
                    )
                }
            </React.Fragment>
        );
    }
}

export default ServiceBox;
