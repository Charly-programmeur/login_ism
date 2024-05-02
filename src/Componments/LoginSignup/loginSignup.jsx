import React from 'react'
import './LoginSignup.css'

import logoISM from '../Assets/logoISM.png'
import user_icon from '../Assets/user.png'
import mail_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
import logo2 from '../Assets/logoalumni.jpeg'

const LoginSignup = () =>{

    return(
        
        <div className="container">
            <div className="header">
                <div className='logs'>
                    <img className='logo' src={logoISM} alt=""/>
                    <img className='logo2' src={logo2} alt=""/>
                </div>
                <div className="text">Connexion</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <img src={user_icon} alt="" />
                    <input type="text" placeholder='Nom:'/>
                </div>
                <div className="input">
                    <img src={mail_icon} alt="" />
                    <input type="email" placeholder='email:'/>
                </div>
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder='mot de passe:'/>
                </div>
            </div>
            <div className='forgot-password'>Mot de passe oublié ?</div>
            <div className='submit-container'>
                <div className='submit'>S'inscrire</div>
                <div className='submit'>Se connecter</div>
            </div>
        </div>
    )
}

export default LoginSignup;