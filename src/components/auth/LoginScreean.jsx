import React from 'react';
import { FooterLogin } from './FooterLogin';

import './login.css';

export const LoginScreean = () => {

  const handleSumit = (e) => {
    e.preventDefault();
  
  }


  return (
      <>
       <div className="upper">
        <div className="logo">
            <a href="#">
                <img src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png" className="img-logo"/>
            </a>
        </div>
        <div className="login-div">
            <form 
            className="login"
            onSubmit={handleSumit}
            >
                <h1>Inicia sesión</h1>
                <div className="input-text">
                    <input type="text" id="inputEmail" name="email" placeholder="Email o número de teléfono" />
                    <div className="warning-input" id="warningEmail">
                        Please enter a valid email or phone number.
                    </div>
                </div>
                
                <div className="input-text">
                    <input type="password" id="inputPassword" name="password" placeholder="Contraseña" />
                    <div className="warning-input" id="warningPassword">
                        Your password must contain between 4 and 60 characters.
                    </div>
                </div>
                
                <div>
                    <button className="signin-button">Iniciar sesión</button>
                </div>
                <div className="remember-flex">
                    <div>
                        <input type="checkbox"/>
                        <label className="color_text"> Recuérdame</label>
                    </div>
                    <div className="help">
                        <a className="color_text" href="https://www.netflix.com/co/LoginHelp">Necesitas ayuda?</a>
                    </div>
                </div>
                <div className="login-face">
                    <img src="https://assets.nflxext.com/ffe/siteui/login/images/FB-f-Logo__blue_57.png" height="20"/><a  className="color_link log_face">Iniciar sesión con Facebook</a>
                </div>
                <div className="new-members">
                ¿Primera vez en Netflix? <a href="https://www.netflix.com/co/" className="signup-link">Suscríbete ya.</a>.
                </div>
                <div className="protection color_link help">
                Esta página está protegida por Google reCAPTCHA para comprobar que no eres un robot. <a href="https://www.netflix.com/co/">Más info.</a>
                </div>
            </form>
        </div>
    </div>

    <FooterLogin />
      </>
  )
};
