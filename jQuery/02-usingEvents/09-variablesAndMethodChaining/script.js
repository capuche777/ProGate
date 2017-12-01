$(function () {
   $('.btn').click(function (){
       var $title = $('#title');

       $title.css('color', 'red');
       $title.html('GoodBye Friend');
       $title.fadeOut(1000);

       $('.text').css('color', 'blue').html('<h3>See ya baby!!</h3>').fadeOut(1000);
   }); 
});