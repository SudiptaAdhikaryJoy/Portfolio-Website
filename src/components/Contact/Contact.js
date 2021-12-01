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
        <div className="container border "
            style={{marginTop:'50px',
            width: '50%',
            backgroundImage: `url('https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            border: '20px',
            borderRadius: '20px',
            borderShadow: 'large'
        }}
        
        >
            
            <h1 style={{marginTop: '25px', color:'#0082c8'}}>Contact Form</h1>
            
            <form className='row' style={{ margin:'25px 85px 75px 100px', color:'#fff'}} onSubmit={sendEmail}>
                {/* <label>Name</label> */}
                <input style={{marginTop:'20px'}} type="text" name="name" className="form-control" placeholder="enter your name" />

                {/* <label>Email</label> */}
                <input style={{marginTop:'20px'}} type="email" name="user_email" className="form-control" placeholder="enter your email address" />

                <label></label>
                <textArea style={{marginTop:'20px'}} name='message' rows='4' className="form-control" placeholder="enter your messages" />
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