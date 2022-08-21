import React from "react";
import { useState,useRef} from "react"
import "./contact.css";
import "./styles.css";
import emailjs from '@emailjs/browser';

export default function Contact() {

    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [message, setmessage] = useState("");
    const form= useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.send('service_gnwiqda', 'template_m21ygcc', templateparams , 'IKTNY9tHU-2pQ7YWD')
              .then (function(response) {
                  console.log("success!",response.status,response.text);
              },  function(error){
                  console.log("Failed...",error);
              });
            }
    console.log(form.current)
    const templateparams={
            from_name:name+" "+email,
            to_name:"prathameshkamble1009@gmail.com",
            feedback:message
        };

        // emailjs.send('service_gnwiqda', 'template_m21ygcc', templateparams).then(
        //     function (response) {
        //         console.log("success!",response.status,response.text);
        //       },
        //       function(reject){
        //         console.log("Failed...",error);
        //       })
              
     
        
    return (<>
        <div>
            <div className="contact-me-card row">
                <div className="col-lg-6 col-md-5 col-sm-12 left-contact px-2 py-2">
                    <span className="get-in-touch mx-4 my-5">
                        Get in Touch</span>
                    <div className="py-5 d-flex justify-content-center">
                        <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_3ktmthuy.json"
                            background="transparent" speed="1" 
                            style={{ width: "300px"}}
                            loop autoplay></lottie-player>
                    </div>
                </div>
                <div className="col-lg-6 col-md-5 col-sm-12 my-auto">
                    <form ref={form} onClick={sendEmail}  className="d-flex flex-column card-contact-right">
                        <div className="input-group my-3 d-flex flex-column">
                            <label>Name</label>
                            <input
                                value={name}
                                onChange={(e) => {
                                    setname(e.target.value)
                                }}
                                type="text" placeholder="enter your name"
                                className="input-groups" />
                        </div>
                        <div className="input-group my-3 d-flex flex-column">
                            <label>Email</label>
                            <input
                                value={email}
                                onChange={(e) => {
                                    setemail(e.target.value)
                                }}
                                type="text" placeholder="enter your email"
                                className="input-groups" />
                        </div>
                        <div className="input-group my-3 d-flex flex-column">
                            <label>Message</label>
                            <textarea
                                value={message}
                                onChange={(e) => {
                                    setmessage(e.target.value)
                                }}
                                type="text" placeholder="enter your Message"
                                className="input-groups" />
                        </div>
                        <div className="input-group my-3 d-flex flex-column">
                            <input className="btn btn-success" type="submit" value="Send Message"/>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
    )};