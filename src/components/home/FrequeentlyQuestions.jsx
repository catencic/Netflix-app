
import React from 'react';

export const FrequeentlyQuestions = () => {
  return (
      <>
      <section class="FAQ__list__container">
        <h1 class="FAQ__heading">Preguntas frecuentes</h1>
        <div class="FAQ__list">
          <div class="FAQ__accordian">
            <button class="FAQ__title">
            ¿Qué es Netflix?<i class="fal fa-plus"></i>
            </button>
            <div class="FAQ__visible">
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
          <div class="FAQ__accordian">
            <button class="FAQ__title">
            ¿Cuánto cuesta Netflix?<i class="fal fa-plus"></i>
            </button>
            <div class="FAQ__visible">
              <p>
            Disfruta Netflix en tu smartphone, tablet, smart TV,
            laptop o dispositivo de streaming, todo por una tarifa
            plana mensual. Planes desde $ 16.900 hasta $ 38.900 al mes. 
            Sin costos adicionales ni contratos.
              </p>
            </div>
          </div>
          <div class="FAQ__accordian">
            <button class="FAQ__title">
            ¿Dónde puedo ver Netflix?<i class="fal fa-plus"></i>
            </button>
            <div class="FAQ__visible">
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

          <div class="FAQ__accordian">
            <button class="FAQ__title">
            ¿Como cancelo?<i class="fal fa-plus"></i>
            </button>
            <div class="FAQ__visible">
              <p>
              Netflix es flexible. Sin contratos molestos ni compromisos. 
              Cancela la membresía online con solo dos clics. No hay cargos por 
              cancelación. Empieza y termina cuando quieras.
              </p>
             
            </div>
            
          </div>
          <div class="FAQ__accordian">
            <button class="FAQ__title">
            ¿Qué puedo ver en Netflix?<i class="fal fa-plus"></i>
            </button>
            <div class="FAQ__visible">
              <p>
              Netflix tiene un amplio catálogo de películas, series, documentales, 
              animes, originales premiados y más. Todo lo que quieras ver, 
              cuando quieras.
              </p>
             
            </div>
            
          </div>
        </div>
     
        <div class="FAQ__get__started__email">
          <h3>
          ¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o 
          reiniciar tu membresía de Netflix.
          </h3>
          <div class="email__form__container">
            <div class="form__container">
              <input type="email" class="email__input" placeholder=" " />
              <label class="email__label">Email</label>
            </div>
            <button class="primary__button">
              Comenzar <i class="fal fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </section>
      </>
  );
};
