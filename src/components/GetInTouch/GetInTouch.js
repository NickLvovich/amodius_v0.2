import React, { useState } from 'react';
import {Container, Row, Col, Label, Button, FormGroup} from "reactstrap";
import { AvForm } from 'availity-reactstrap-validation';
import {ADDRESS, EMAIL, PHONE_NUMBER, SUBJECTS} from "../../helpers/constants";
import {FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";

//Import Section Title
import SectionTitle from "../common/section-title";

const GetInTouch = () => {
    const [subjectItem, setSubjectItem] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const handleSubjectChange = (event) => {
        setSubjectItem(event.target.value);
    };
    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    return (
        <>
            <section className="section" id="getInTouch">
                <Container>
                    <SectionTitle
                        title1="Contact "
                        title2="Form"
                        // desc="Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero pulvinar hendrerit id lorem."
                    />

                    <Row>
                        <Col lg={4}>
                            <Col md={12}>
                            <div className="contact-address">
                                <h4 className="text-dark mb-4">Contact Info</h4>
                                <p className="text-muted f-15">In this contact form you can leave a request for one of our aims. We will contact you as soon as possible.</p>
                            </div>
                            </Col>
                            <Col md={12}>
                                <div className="contact-address">
                                    <h5 className="text-dark mb-3 f-16">Address</h5>
                                    <p className="text-muted f-15">
                                        {ADDRESS}
                                    </p>
                                </div>
                            </Col>
                            <Col md={12}>
                                <div className="contact-address">
                                    <h5 className="text-dark mb-3 f-16">Phone</h5>
                                    <p>
                                        <a
                                          href={`tel:${PHONE_NUMBER}`}
                                          className="text-muted f-15"
                                        >
                                            {PHONE_NUMBER}
                                        </a>
                                    </p>
                                </div>
                            </Col>
                            <Col md={12}>
                                <div className="contact-address">
                                    <h5 className="text-dark mb-3 f-16">Email</h5>
                                    <p>
                                        <a
                                          href={`mailto:${EMAIL}`}
                                          className="text-muted f-15"
                                        >
                                            {EMAIL}
                                        </a>
                                    </p>
                                </div>
                            </Col>
                        </Col>

                        <Col lg={{size:7, offset:1}}>
                            <div className="custom-form mt-4 mt-lg-0">
                                <div id="message"></div>
                                <AvForm name="contact-form" id="contact-form">
                                    <Row>
                                        <Col lg={6}>
                                            <TextField
                                              id="name"
                                              label="Name"
                                              variant="outlined"
                                              placeholder="Your Name..."
                                              value={name}
                                              onChange={handleNameChange}
                                              required
                                              fullWidth
                                            />
                                        </Col>
                                        <Col lg={6}>
                                            <TextField
                                              id="email"
                                              label="Email"
                                              type="email"
                                              value={email}
                                              onChange={handleEmailChange}
                                              placeholder="Your email address..."
                                              variant="outlined"
                                              required
                                              fullWidth
                                            />
                                        </Col>
                                        <Col lg={12}>
                                            <FormControl fullWidth>
                                                <InputLabel id="demo-simple-select-label">Subject *</InputLabel>
                                                <Select
                                                  labelId="subject-select"
                                                  id="subject"
                                                  value={subjectItem}
                                                  label="Subject"
                                                  onChange={handleSubjectChange}
                                                  required
                                                >
                                                    {SUBJECTS.map((subjectItem, key) => <MenuItem value={subjectItem.title} key={key}>{subjectItem.title}</MenuItem>)}
                                                </Select>
                                            </FormControl>
                                        </Col>
                                        <Col lg={12}>
                                            <FormControl className="app-label" fullWidth>
                                                <TextField
                                                  id="comments"
                                                  label="Message"
                                                  multiline
                                                  rows={3}
                                                  placeholder="Enter message.."
                                                  variant="outlined"
                                                  fullWidth
                                                />
                                            </FormControl>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={12}>
                                            <Button type="submit" id="submit" name="send" color="warning">Send Message <i className="mdi mdi-telegram ml-2"></i></Button>
                                            <div id="simple-msg"></div>
                                        </Col>
                                    </Row>
                                </AvForm>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}
export default GetInTouch;
