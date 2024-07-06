import { useState } from "react";

function Register()

{
    function handleregister(){

    }
    return(<div style={{ backgroundImage:'url(https://marketplace.canva.com/EAE6i9HJ9wA/1/0/800w/canva-yellow-minimalist-linktree-background-9SUANRnhS_8.jpg)',flexDirection:'column',justifyContent:'center'}}>
        <div style={{height:'300px',display:'flex',border:'solid',paddingTop:'100px',paddingLeft:'35%', flexDirection:'column',justifyContent:'center'}}>
            <h1>Register</h1>
            <div style={{display:'flex',gap:'10px',flexDirection:'column',height:'300px',width:'300px',borderRadius:'10px'}}>
                <input type="text" placeholder="enter first name"style={{border:'none',outline:'none',background:'transparent',borderRadius:'10px',border:'2px solid black',boxShadow:'5px 5px 5px 12px #ffffff inset 5px 5px 12px rgba(0,0,0,0.16)'}}/>
                <input type="text" placeholder="enter last name" style={{border:'none',outline:'none',background:'transparent',border:'2px solid black',boxShadow:'5px 5px 5px 12px #ffffff inset 5px 5px 12px rgba(0,0,0,0.16)',borderRadius:'10px'}}/>
                <input type="date" placeholder="date of birth" style={{border:'none',outline:'none',background:'transparent',border:'2px solid black',boxShadow:'5px 5px 5px 12px #ffffff inset 5px 5px 12px rgba(0,0,0,0.16)',borderRadius:'10px'}}/>
                <input type="email" placeholder="email" style={{border:'none',outline:'none',background:'transparent',border:'2px solid black',boxShadow:'5px 5px 5px 12px #ffffff inset 5px 5px 12px rgba(0,0,0,0.16)',borderRadius:'10px'}}/>
                <input type="password" placeholder="enter password" style={{border:'none',outline:'none',background:'transparent',borderRadius:'10px',border:'2px solid black',boxShadow:'5px 5px 5px 12px #ffffff inset 5px 5px 12px rgba(0,0,0,0.16)'}}/>
         <div> <h4>Already have an account?</h4></div> 
            </div>
        </div></div>
    )
} export default Register;
