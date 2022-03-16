$(document).ready(function () {
   const blockbar = document.querySelector('.block-bar');
   const menu = document.querySelector('.menu');
   const backgroundmenu = document.querySelector('.menu .background');

   blockbar.onclick = function () {
      menu.classList.add('ativo');
   };

   backgroundmenu.onclick = function () {
      menu.classList.remove('ativo');
   };

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
