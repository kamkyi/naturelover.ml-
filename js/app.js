//get the ok
var loading=document.getElementById('loading');
var content=document.getElementById('content');

var loadContainer=document.getElementById('load-container');


$(document).ready(function(){

      $(window).on('load',function(){
        
            $('#loading').fadeOut();
      });
      $(window).on('scroll',function(){
                 if($(window).scrollTop()){
                           $('nav').fadeOut();
                           $('.go-to-top-father').fadeIn();
                 }else{
                           $('nav').fadeIn();
                           $('.go-to-top-father').fadeOut();
                 }
      });




      $('#go-to-top').on('click',function(){
      	         $('html,body').animate({scrollTop:0},800);
      	         return false;
      });




      //bars on  click 
      $('.bars').on('click',function(){
                $('.mobile-menu').toggle();
      });

      // //on resize
      $(window).on('resize',function(e){
      	   if($(document).width()>729){
                     $('.mobile-menu').fadeOut();
            }
      });

      // loadIng();
});


// //function loading
// function loadIng(){
//             //interval
//             setInterval(showMainContent,3000);
// }


// function showMainContent(){
//              loading.style.display='none';
//              content.style.display='block';
//              loadContainer.style.display='none';
// }