import React, { useState, useRef } from 'react';
import {Container, Row, Col, Button} from "reactstrap";
import {ADDRESS, EMAIL, PHONE_NUMBER, SUBJECTS, UserData} from "../../helpers/constants";
import {FormControl, InputLabel, MenuItem, Select, Snackbar, Stack, TextField, Alert} from "@mui/material";
import emailjs from '@emailjs/browser';
import SendIcon from '@mui/icons-material/Send';
//Import Section Title
import SectionTitle from "../common/section-title";

const GetInTouch = () => {
    const form = useRef();
    const [subjectItem, setSubjectItem] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [activeButton, setActiveButton] = useState(false)
    const [open, setOpen] = useState(false)

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };


    const sendEmail = (e) => {
        setActiveButton(true);
        e.preventDefault();
        emailjs.sendForm( UserData.serviceID, UserData.templateID, form.current, UserData.publicKey)
          .then((result) => {
              console.log(result.text);
              setActiveButton(false);
              setOpen(true);
          }, (error) => {
              console.log(error.text);
          });
    };
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
                                <form ref={form} onSubmit={sendEmail}>
                                    <Row>
                                        <Col lg={6}>
                                            <TextField
                                              id="name"
                                              name="name"
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
                                              name="email"
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
                                                  name="subject"
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
                                                  name="comments"
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
                                            <Button
                                              type="submit"
                                              id="submit"
                                              name="send"
                                              color="warning"
                                              disabled={activeButton}
                                            >
                                                Send Message
                                            </Button>
                                            <div id="simple-msg"></div>
                                        </Col>
                                    </Row>
                                    <Stack spacing={2} sx={{ width: '100%' }}>
                                        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                                            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                                                Your message has been sent successfully!
                                            </Alert>
                                        </Snackbar>
                                    </Stack>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}
export default GetInTouch;
