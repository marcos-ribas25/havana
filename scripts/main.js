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
      loop:true,
      margin:20,
      nav:false,
      items: 2,
      responsive  : {
         0: {
            items: 1,
            margin: 20,
         },
         1100: {
            items: 2,
            margin: 10
         },
         1200: {
            items: 3,
            margin:  20,
         }
      }
  })

  $('.owl-equipe').owlCarousel({
   loop:true,
   margin:20,
   nav:true,
   dots:false,
   items: 3,
   responsive  : {
      0: {
         items: 1,
         margin: 0,
      },
      500: {
         items: 2,
         margin: 10
      },
      992: {
         items: 3,
         margin: 10
      },

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

