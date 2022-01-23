import React from 'react';
import { FooterButton } from './FooterButton';
import { FooterTop } from './FooterTop';
import { FrequeentlyQuestions } from './FrequeentlyQuestions';

import './home.css';

export const HomePage = () => {
  return (
      <>
          
    
  
    <header>
      <nav className="navbar">
        <div className="navbar__brand">
          <img
            src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
            alt="logo"
            className="brand__logo"
          />
        </div>

        <div className="navbar__nav__items">
          <div className="nav__item">
            <div className="dropdown__container">
              <i className="fas fa-globe"></i>
              <select
                name="languages"
                id="languagesSelect"
                className="language__drop__down"
              >
                <option value="english" defaultValue>Español</option>
                <option value="hindi">Ingles</option>
              </select>
            </div>
          </div>

          <div className="nav__item">
            <button className="signin__button">Iniciar sesión</button>
          </div>
        </div>
      </nav>
    </header>

    <main>
      <section className="hero">
        <div className="hero__bg__image__container">
          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/9c5457b8-9ab0-4a04-9fc1-e608d5670f1a/710d74e0-7158-408e-8d9b-23c219dee5df/IN-en-20210719-popsignuptwoweeks-perspective_alpha_website_small.jpg"
            alt="BG hero image"
            className="hero__bg__image"
          />
        </div>
        <div className="hero__bg__overlay"></div>

        <div className="hero__card">
          <h1 className="hero__title">
          Películas y series,<br />
          y mucho más.
          </h1>
          <p className="hero__subtitle">Disfruta donde quieras. Cancela cuando quieras.</p>
          <p className="hero__description">
          ¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta
           o reiniciar tu membresía de Netflix.
          </p>

          <div className="email__form__container">
            <div className="form__container">
              <input type="email" className="email__input" placeholder=" " />
              <label className="email__label">Email</label>
            </div>
            <button className="primary__button">
              Comenzar <i className="fal fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </section>

       <FooterTop />
 
      

      <FrequeentlyQuestions />

    </main>

    <script src="../../helpers/script.js"></script>
    <FooterButton />
  

    

      </>
  )
};
