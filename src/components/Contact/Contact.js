import React from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_cloayx8','template_hwhkh9s',e.target,'user_XUx2hs4Z7T8AVDRMbbqDr')
        .then(res=>{console.log(res)}
        
        ).catch(err=>console.log(err));
    }
    
    return (
        <div className="container border"
            style={{marginTop:'50px',
            width: '50%',
            backgroundImage: `url('https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover'
        }}
        
        >
            
            <h1 style={{marginTop: '25px'}}>Contact Form</h1>
            
            <form className='row' style={{ margin:'25px 85px 75px 100px', color:'#fff'}} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="name" className="form-control" />

                <label>Email</label>
                <input type="email" name="user_email" className="form-control" />

                <label>Message</label>
                <textArea name='message' rows='4' className="form-control" />
                <input
                 type="submit" 
                 value="send" 
                 className="form-control btn btn-primary"
                 style={{marginTop:'30px',}}
                 />
            </form>
        </div>
    );
};

export default Contact;