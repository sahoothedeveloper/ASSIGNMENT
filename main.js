window.addEventListener("scroll", function(){
   var navMenu = document.querySelector("header");
   navMenu.classList.toggle('sticky', window.scrollY > 0);
 });

/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
navToggle.addEventListener('click', () =>{
   navMenu.classList.add('show-menu')
})

/* Menu hidden */
navClose.addEventListener('click', () =>{
   navMenu.classList.remove('show-menu')
})



$(function () {
		
   var filterList = {
   
      init: function () {
      
         // MixItUp plugin
         // http://mixitup.io
         $('#portfoliolist').mixItUp({
           selectors: {
            target: '.portfolio',
            filter: '.filter'	
         },
         load: {
           filter: '.app'  
         }     
         });								
      
      }

   };
   
   // Run the show!
   filterList.init();
   
});	





