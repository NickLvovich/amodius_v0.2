import React from 'react';
import { Container, Row } from "reactstrap";
//Import Section Title
import SectionTitle from "../common/section-title";
import ServiceBox from "./services-box";
import {SERVICES} from "../../helpers/constants";

function Service() {

    return (
      <React.Fragment>
          <section className="section" id="services">
              <Container>
                  <SectionTitle
                    title1="Our "
                    title2="Aims: "
                    desc=""
                  />
                  <Row>
                      <ServiceBox services={SERVICES} />
                  </Row>
              </Container>
          </section>
      </React.Fragment>
    );
}

export default Service;
