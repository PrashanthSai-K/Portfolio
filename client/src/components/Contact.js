import React, {useRef, useState} from 'react';
import '../css/contact.css';
import emailjs from '@emailjs/browser';



const Contact = () => {

  const form = useRef();

  const [formData, setFormData] = useState({name: "", email:"", message:""});

  const handleInput =(e)=>{
    e.preventDefault();
    setFormData({...formData, [e.target.name] : e.target.value})
  }



  const sendEmail= (e)=>{
    if(formData.name != "" && formData.message != "" && formData.email != ""){
      emailjs
      .send('service_i3v39nj', 'template_mdph0oa', formData, {
        publicKey: 'FVnO9bw4gIeQfVrph',
      } )
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error);
        },
      );
    }else{
      console.log("Data Required");
    }
    
  }

  return (
    <>
      <section id='contactme'>
        <div className="contact-container">
          <div className="contact-heading">
            Contact Me <div className="underscore"></div>
          </div>
          <div className="contact-content">
            <div className="contact-content1">
              <div className="contact-group">
                <i className="fas fa-user"></i>
                <div className="contct-namegroup">
                  <div>Name</div>
                  <div style={{ color: "rgb(92, 225, 230)" }}>
                    Sai Prashanth K
                  </div>
                </div>
              </div>
              <div className="contact-group">
                <i className="fas fa-map-marker-alt"></i>
                <div className="contct-namegroup">
                  <div>Place</div>
                  <div style={{ color: "rgb(92, 225, 230)" }}>
                    Appakudal, Erode
                  </div>
                </div>
              </div>
              <div className="contact-group">
                <i className="fas fa-envelope"></i>
                <div className="contct-namegroup">
                  <div>Email</div>
                  <div style={{ color: "rgb(92, 225, 230)" }}>
                    saiprashanth.cs21@bitsathy.ac.in
                  </div>
                </div>
              </div>
              <div className="thanks-container">
                <div className="thanks-heading">Thanks !!</div>
                <div className="thanks-content">
                  Thank you for visiting my portfolio site! I appreciate your
                  time and interest in exploring my work. If you have any
                  questions or would like to learn more about my projects, feel
                  free to reach out. Your support means a lot to me!
                </div>
              </div>
            </div>
            <div className="contact-content2">
              <form onSubmit={sendEmail}>
                <div className="input-group">
                  <div className="input-heading">Name :</div>
                  <input type="text" required value={formData.name} onChange={handleInput} name='name'/>
                </div>
                <div className="input-group">
                  <div className="input-heading">Email :</div>
                  <input type="text" required value={formData.email} onChange={handleInput} name='email'/>
                </div>
                <div className="input-group">
                  <div className="input-heading">Message :</div>
                  <textarea type="text" required onChange={handleInput} value={formData.message} name='message'/>
                </div>
                <input className="contact-button contact-button-2" style={{textAlign:"center"}} value="Send" onClick={sendEmail} />
              </form>
            </div>
          </div>
          <footer className="copyright">
            Created by{" "}
            <span style={{ color: "rgb(92, 225, 230)" }}> Sai K❤️ </span>
            || &#169; 2023 All rights Reserved{" "}
          </footer>
        </div>
      </section>
    </>
  );
}

export default Contact