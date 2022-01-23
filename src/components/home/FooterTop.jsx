import React from 'react';

export const FooterTop = () => {
  return (
    <section class="features__container">
    {/*  <!-- Feature 1 --> */}
     <div class="feature">
       <div class="feature__details">
         <h3 class="feature__title">Disfruta en tu TV.</h3>
         <h5 class="feature__sub__title">
         Ve en smart TV, PlayStation, Xbox, Chromecast, Apple TV, reproductores
          de Blu-ray y más.
         </h5>
       </div>
       <div class="feature__image__container">
         <img
           src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
           alt="Feature image"
           class="feature__image"
         />
         <div class="feature__backgroud__video__container">
           <video
             autoplay=""
             loop=""
             muted=""
             class="feature__backgroud__video"
           >
             <source
               src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
               type="video/mp4"
             />
           </video>
         </div>
       </div>
     </div>
     {/* <!-- Feature 2 --> */}
     <div class="feature">
       <div class="feature__details">
         <h3 class="feature__title">
         Descarga tus series para verlas offline.
         </h3>
         <h5 class="feature__sub__title">
         Guarda tu contenido favorito y tendrás siempre algo para ver.
         </h5>
       </div>
       <div class="feature__image__container">
         <img
           src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
           alt="Feature image"
           class="feature__image"
         />
         <div class="feature__2__poster__container">
           <div class="poster__container">
             <img
               src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
               alt="poster"
               class="poster"
             />
           </div>
           <div class="poster__details">
             <h4>Stranger Things</h4>
             <h6>Descargando...</h6>
           </div>
           <div class="download__gif__container">
             <img
               src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif"
               alt="downloading gif"
               class="gif"
             />
           </div>
         </div>
       </div>
     </div>
     {/* <!-- Feature 3 --> */}
     <div class="feature">
       <div class="feature__details">
         <h3 class="feature__title">Disfruta donde quieras.</h3>
         <h5 class="feature__sub__title">
         Películas y series ilimitadas en tu teléfono, tablet,
          computadora y TV sin costo extra.
         </h5>
       </div>
       <div class="feature__image__container feature__3__image__container">
         <img
           src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
           alt="Feature image"
           class="feature__image feature__3__image"
         />
         <div
           class="
             feature__backgroud__video__container
             feature__3__backgroud__video__container
           "
         >
           <video
             autoplay=""
             loop=""
             muted=""
             class="feature__backgroud__video feature__3__backgroud__video"
           >
             <source
               src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
               type="video/mp4"
             />
           </video>
         </div>
       </div>
     </div>
{/*       <!-- Feature 4 --> */}
     <div class="feature">
       <div class="feature__details">
         <h3 class="feature__title">Crea perfiles para niños.</h3>
         <h5 class="feature__sub__title">
         Los niños vivirán aventuras con sus personajes favoritos en un 
         espacio diseñado exclusivamente para ellos, sin costo con tu membresía.
         </h5>
       </div>
       <div class="feature__image__container">
         <img
           src="https://occ-0-1016-3934.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABeLa_an51Ptz6LMzNXnM9oDvlKl4yIJQKZJRJ9fVFPpPFK5toVuo-KytXEdqPI64KCph1OKms7nLxtCsXm_CARaR50wx.png?r=8ec"
           alt="Feature image"
           class="feature__image"
         />
       </div>
     </div>
   </section>
  )
};
