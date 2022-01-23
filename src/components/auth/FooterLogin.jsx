import React from 'react';

export const FooterLogin = () => {
  return (
      <>
      <div className="bottom">
        <div className="bottom-width">
        ¿Preguntas? Llama al<a href="tel:1-844-542-4813" className="tel-link">01 800 917 1564</a>
            <div>
                <ul className="bottom-flex">
                    <li className="list-bottom">
                        <a href="https://help.netflix.com/es/node/412" className="link-bottom">
                        Preguntas frecuentes
                        </a>
                    </li>
                    <li className="list-bottom">
                        <a href="https://help.netflix.com/es/" className="link-bottom">
                        Centro de ayuda
                        </a>
                    </li>
                    <li className="list-bottom">
                        <a href="https://help.netflix.com/legal/termsofuse" className="link-bottom">
                        Términos de uso
                        </a>
                    </li>
                    <li className="list-bottom">
                        <a href="https://help.netflix.com/legal/privacy" className="link-bottom">
                        Privacidad
                        </a>
                    </li>
                    <li className="list-bottom">
                        <a href="https://www.netflix.com/co/login" className="link-bottom">
                        Preferencias de cookies
                        </a>
                    </li>
                    <li className="list-bottom">
                        <a href="https://help.netflix.com/legal/corpinfo" className="link-bottom">
                        Información corporativa
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <select className="fa select-language">
                    <option> &#xf0ac; &nbsp;&nbsp;&nbsp;Español</option>
                    <option> &#xf0ac; &nbsp;&nbsp;&nbsp;Ingles</option>
                </select>
            </div>
        </div>
    </div>
      </>
  )
};
