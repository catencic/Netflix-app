import React from 'react';

export const FooterButton = () => {
  return (
      <>
      <footer>
      <div className="footer__row__1">
        <h4>¿Preguntas? Llama al 01 800 917 1564</h4>
      </div>
      <div className="footer__row__2">
        <div className="column__1">
          <p>Preguntas frecuentes</p>
          <p>Relaciones con inversionistas</p>
          <p>Formas de ver</p>
          <p>Solo en Netflix</p>
        </div>
        <div className="column__2">
          <p>Centro de ayuda</p>
          <p>Empleo</p>
          <p>Términos de uso</p>
          <p>Contáctanos</p>
        </div>
        <div className="column__3">
          <p>Cuenta</p>
          <p>Canjear tarjetas de regalo</p>
          <p>Privacidad</p>
          <p>Prueba de velocidad</p>
        </div>
        <div className="column__4">
          <p>Prensa</p>
          <p>Comprar tarjetas de regalo</p>
          <p>Preferencias de cookies</p>
          <p>Avisos legales</p>
        </div>
      </div>
      <div className="footer__row__3">
        <div className="dropdown__container">
          <i className="fas fa-globe"></i>
          <select
            name="languages"
            id="languagesSelect"
            className="language__drop__down"
          >
            <option value="english"  defaultValue>Español</option>
            <option value="hindi">Ingles</option>
          </select>
        </div>
      </div>
      <div className="footer__row__4">
        <p>Netflix Colombia</p>
      </div>
    </footer>

      </>
  )
};
