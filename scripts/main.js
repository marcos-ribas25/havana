$(document).ready(function () {
   const blockbar = document.querySelector('.block-bar');
   const BoxMenu = document.querySelector('.box-menu');
   const backgroundMenu = document.querySelector('.background-menu');

   blockbar.onclick = function () {
      backgroundMenu.classList.add('ativo');
      BoxMenu.classList.add('ativo');
   };

   backgroundMenu.onclick = function () {
      backgroundMenu.classList.remove('ativo');
      BoxMenu.classList.remove('ativo');
   };

   $('.owl-feedback').owlCarousel({
      stagePadding: 100,
      loop:true,
      margin:20,
      nav:false,
      items: 2,
      center:true,
      responsive  : {
         0: {
            items: 1,
            margin: 20,
            stagePadding: 0,
         },
         656: {
            items: 2,
            margin: 10,
            stagePadding: 25
         },
         768: {
            items: 2,
            margin: 20,
            stagePadding: 50
         },
         1100: {
            items: 2,
            margin: 10
         },
         1200: {
            items: 2,
            margin:  20,
         }
      }
  })

   if ($('.cep-mask').length > 0) {
      $('.cep-mask').mask('99.999-999');
   }

   if ($('.date-mask').length > 0) {
      $('.date-mask').mask('99/99/9999');
   }

   if ($('.number-mask').length > 0) {
      $('.number-mask').mask('99999');
   }

   if ($('.cvv-mask').length > 0) {
      $('.cvv-mask').mask('999');
   }

   if ($('.cpf-mask').length > 0) {
      $('.cpf-mask').mask('999.999.999-99');
   }

   if ($('.phone-mask').length > 0) {
      $('.phone-mask').mask(SPMaskBehavior, spOptions);
   }
});

new PureCounter();