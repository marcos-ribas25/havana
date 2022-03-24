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

});

new PureCounter();

