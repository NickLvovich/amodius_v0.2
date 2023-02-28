import React from 'react';
import { Container, Row, Col } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";

const About = () => {
    return (
      <>
          <section className="section bg-light" id="about">
              <Container>
                  <SectionTitle
                    title1="About "
                    title2="Us"
                    // desc="Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero pulvinar hendrerit id lorem."
                  />

                  <Row>
                      <Col md={4}>
                          <h2 className="font-weight-light line-height-1_6 text-dark mb-4">Passionate about sustainable growth, human development, and knowledge</h2>
                      </Col>
                      <Col md={{size:7, offset :1}}>
                          <Row>
                              <Col md={6}>
                                  <h6 className="text-dark font-weight-light f-20 mb-3">Our Mission</h6>
                                  <p className="text-muted font-weight-light">
                                      Through our actions we wish to contribute to creating a harmonious and inclusive society. Amodius achieves its goals by a global approach that implements social and educational actions aimed at social and professional integration.
                                  </p>
                              </Col>
                              <Col md={6}>
                                  <h6 className="text-dark font-weight-light f-20 mb-3">Our Vision</h6>
                                  <p className="text-muted font-weight-light">
                                      Amodius pursues its goal through its commitment with various partners among the non commercial and public organizations in initiatives aiming the promotion of a society centered on the human person and, and values such as freedom, peace and social justice.
                                  </p>
                              </Col>
                          </Row>
                      </Col>
                  </Row>
              </Container>
          </section>
      </>
    );
}

export default About;
