
import React from 'react';

export const FrequeentlyQuestions = () => {
  return (
      <>
      <section className="FAQ__list__container">
        <h1 className="FAQ__heading">Preguntas frecuentes</h1>
        <div className="FAQ__list">
          <div className="FAQ__accordian">
            <button className="FAQ__title">
            ¿Qué es Netflix?<i className="fal fa-plus"></i>
            </button>
            <div className="FAQ__visible">
              <p>
              Netflix es un servicio de streaming que ofrece una gran variedad de películas,
               series y documentales premiados en casi cualquier pantalla conectada a internet.
              </p>
              <p>
              Todo lo que quieras ver, sin límites ni comerciales, a un costo muy accesible.
                 Siempre hay algo nuevo por descubrir, ¡y todas las semanas se agregan más películas y series!
              </p>
            </div>
          </div>
          <div className="FAQ__accordian">
            <button className="FAQ__title">
            ¿Cuánto cuesta Netflix?<i className="fal fa-plus"></i>
            </button>
            <div className="FAQ__visible">
              <p>
            Disfruta Netflix en tu smartphone, tablet, smart TV,
            laptop o dispositivo de streaming, todo por una tarifa
            plana mensual. Planes desde $ 16.900 hasta $ 38.900 al mes. 
            Sin costos adicionales ni contratos.
              </p>
            </div>
          </div>
          <div className="FAQ__accordian">
            <button className="FAQ__title">
            ¿Dónde puedo ver Netflix?<i className="fal fa-plus"></i>
            </button>
            <div className="FAQ__visible">
              <p>
              Disfruta donde quieras, cuando quieras. Inicia sesión en tu cuenta de 
              Netflix para ver contenido al instante a través de netflix.com desde tu 
              computadora personal o en cualquier dispositivo con conexión a internet que 
              cuente con la app de Netflix, como smart TV, smartphones, tablets, 
              reproductores multimedia y consolas de juegos.
              </p>
              <p>
              Además, puedes descargar tus series favoritas con iOS, Android o la 
              app para Windows 10. Con la función de descarga, puedes ver donde vayas y 
              sin conexión a internet. Lleva Netflix contigo adonde sea.
              </p>
            </div>
            
          </div>

          <div className="FAQ__accordian">
            <button className="FAQ__title">
            ¿Como cancelo?<i className="fal fa-plus"></i>
            </button>
            <div className="FAQ__visible">
              <p>
              Netflix es flexible. Sin contratos molestos ni compromisos. 
              Cancela la membresía online con solo dos clics. No hay cargos por 
              cancelación. Empieza y termina cuando quieras.
              </p>
             
            </div>
            
          </div>
          <div className="FAQ__accordian">
            <button className="FAQ__title">
            ¿Qué puedo ver en Netflix?<i className="fal fa-plus"></i>
            </button>
            <div className="FAQ__visible">
              <p>
              Netflix tiene un amplio catálogo de películas, series, documentales, 
              animes, originales premiados y más. Todo lo que quieras ver, 
              cuando quieras.
              </p>
             
            </div>
            
          </div>
        </div>
     
        <div className="FAQ__get__started__email">
          <h3>
          ¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o 
          reiniciar tu membresía de Netflix.
          </h3>
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
      </>
  );
};
