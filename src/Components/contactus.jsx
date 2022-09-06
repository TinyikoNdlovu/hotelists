import React from "react";

import { TextField, Typography, Container, Card, CardContent } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import TextareaAutosize from '@mui/material/TextareaAutosize';

import { Fab } from "@mui/material";
import { Form, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup'

import PlaceIcon from '@mui/icons-material/Place';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';

function ContactUs() {

  const initialValues={
    firstName:'',
    lastName:'',
    phoneNumber:'',
    email:'',
    subject:'',
    country:'',
    message:''
  }

  const onSubmit=(values, props)=>{
    console.log(values)
  }

  return (
    <div className="Main-container">
      
      <iframe style={{width:'100%', height:'500px'}} src="https://maps.google.com/maps?q=ewc%20tembisa&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>

            <Card style={{maxwidth: 450, margin: "0 auto", padding: "20px 5px"}}>
              <CardContent>
                <Typography gutterBottom variant="h5" style={{display: "flex", justifyContent: "center", alignSelf: "center", marginBottom: "20px"}}>Contact Us</Typography>
                <Typography gutterBottom color="textSecondary" variant="body2" component="p" style={{display: "flex", justifyContent: "center", alignSelf: "center", marginBottom: "20px"}}>Fill out the form below, and our team will get back to you as soon as possible.</Typography>
                <Formik initialValues={initialValues} onSubmit={onSubmit}>
                  {(props)=>(
                    <Form>
                  
                    <Container className="container-tasks" style={{display: "flex",flexDirection: "column", justifyContent: "center", alignItems: "center", marginBottom: "20px"}}>
                      
                      <TextField id="firstName" name="firstName" required label="First Name" placeholder="Enter first name" type="text" variant="outlined" style={{width: '30%', marginTop: '15PX', marginBottom: '15PX'}} fullWidth 
                      value={props.values.firstName} onChange={props.handleChange} />
      
                      <TextField id="lastName" name="lastName" required label="Last Name" placeholder="Enter last name" type="text" variant="outlined" style={{width: '30%', marginBottom: '15PX'}} fullWidth
                      value={props.values.lastName} onChange={props.handleChange} />
      
                      <TextField id="phoneNumber" name="phoneNumber" required label="Phone" placeholder="Enter Phone number" type="number" variant="outlined" style={{width: '30%', marginBottom: '15PX'}} fullWidth 
                      value={props.values.phoneNumber} onChange={props.handleChange} />
      
                      <TextField id="email" name="email" required label="Email" placeholder="Enter email" type="email" variant="outlined" style={{width: '30%', marginBottom: '15PX'}} fullWidth 
                      value={props.values.email} onChange={props.handleChange} />
      
                      <TextField id="subject" name="subject" required label="Subject" placeholder="Enter the subject" type="text" variant="outlined" style={{width: '30%', marginBottom: '15PX'}} fullWidth 
                      value={props.values.subject} onChange={props.handleChange} />
      
                      <TextField id="country" name="country" required label="Country" placeholder="Enter country" type="text" variant="outlined" style={{width: '30%', marginBottom:'15px'}} fullWidth 
                      value={props.values.country} onChange={props.handleChange} />
      
                      <TextField id="message" name="message" required label="Message" multiline rows={4} placeholder="Type your message here" variant="outlined" style={{width: '30%', marginBottom:'15px'}} fullWidth 
                      value={props.values.message} onChange={props.handleChange} />
      
                     <Button type="submit" variant="contained" style={{ width: '15%', marginBottom:'15px' }} fullWidth>Submit</Button>
                    </Container>
                    </Form>
                  )}
                </Formik>
              </CardContent>
            </Card>

            <div className="contact-location" style={{display: "flex",flexDirection: "column", justifyContent: "center", alignItems: "center", marginBottom: "20px", marginTop: '20px'}}>
            <InputLabel id="demo-simple-select-label">Visit us</InputLabel>
            <Fab type='submit' style={{marginTop: '20px', backgroundColor: '#00695c', borderRadius: '10px', width: '45px', color: '#fff'}}>
                        <PlaceIcon />
                    </Fab>
                    <InputLabel id="demo-simple-select-label">Sandton Park, Madiba Street, Building 1793,1685</InputLabel>
            

            </div>

            <div className="message-call" style={{display: "flex",flexDirection: "column", justifyContent: "center", alignItems: "center", marginBottom: "20px"}}>
            <InputLabel id="demo-simple-select-label">Email or call us</InputLabel>
            <Fab type='submit' style={{marginTop: '20px', backgroundColor: '#00695c', borderRadius: '10px', width: '45px', color: '#fff'}}>
                        <EmailIcon />
                    </Fab>
                    <InputLabel id="demo-simple-select-label">info@exampalhotel.com</InputLabel>

                    <Fab type='submit' style={{marginTop: '20px', backgroundColor: '#00695c', borderRadius: '10px', width: '45px', color: '#fff'}}>
                        <PhoneIcon />
                    </Fab>
                    <InputLabel id="demo-simple-select-label">+27 11 3737379</InputLabel>

            </div>

            <InputLabel id="demo-simple-select-label" style={{display: "flex", justifyContent: "center", alignSelf: "center", marginBottom: "10px"}}>Follow us</InputLabel>
            <div className="social-contacts" style={{display: "flex",flexDirection: "row", justifyContent: "center", alignItems: "center", marginBottom: "20px"}}>

            <Fab type='submit' style={{marginTop: '20px', marginRight: '15px', backgroundColor: '#00695c', borderRadius: '10px', width: '45px', color: '#fff'}}>
                        <FacebookIcon />
                    </Fab>

                    <Fab type='submit' style={{marginTop: '20px', marginRight: '15px', backgroundColor: '#00695c', borderRadius: '10px', width: '45px', color: '#fff'}}>
                        <TwitterIcon />
                    </Fab>

                    <Fab type='submit' style={{marginTop: '20px', marginRight: '15px', backgroundColor: '#00695c', borderRadius: '10px', width: '45px', color: '#fff'}}>
                        <LinkedInIcon />
                    </Fab>

                    <Fab type='submit' style={{marginTop: '20px', marginRight: '15px', backgroundColor: '#00695c', borderRadius: '10px', width: '45px', color: '#fff'}}>
                        <InstagramIcon />
                    </Fab>

                    <Fab type='submit' style={{marginTop: '20px', marginRight: '15px', backgroundColor: '#00695c', borderRadius: '10px', width: '45px', color: '#fff'}}>
                        <PinterestIcon />
                    </Fab>

                    <Fab type='submit' style={{marginTop: '20px', marginRight: '15px', backgroundColor: '#00695c', borderRadius: '10px', width: '45px', color: '#fff'}}>
                        <YouTubeIcon />
                    </Fab>

            </div>
        </div>
  );
}

export default ContactUs;