'use strict'

$(document).ready(function(){

    $('.subir').click(function(){
        $('html, body').animate({
            scrollTop:'0px'
        }, 1000);
     });
     $(window).scroll(function(){
        if($(this).scrollTop()>0){
            $('.subir').slideDown(300);
            $('subir').hide();
        }else{
            $('.subir').slideUp(300);
        }
     });

     $('#proyectos').click(function(){
         $('html, body').animate({
             scrollTop:$('#titulo-proyectos').offset().top
         },1000);
     });

     $('#habilidades').click(function(){
        $('html, body').animate({
            scrollTop:$('#titulo-habilidades').offset().top
        }, 1000);
     });

     $('#contacto').click(function(){
        $('html,body').animate({
            scrollTop:$('#titulo-contacto').offset().top
        }, 1000);
     });

     var altura = $('#navegacion').offset().top;
     /*alert(altura);*/

     $(window).on('scroll', function(){
         if($(window).scrollTop() > altura){
             $('#navegacion').addClass('navegacion-fija');
         }else{
             $('#navegacion').removeClass('navegacion-fija');
         }
     });
/*      var ultima = $('.ultima');
    
     for(var i = 0; i < ultima.length ; i++){
        console.log(ultima[i]);
     } */
/*Inputs*/


$('#formulario').validate({
    rules : {
        nombre: {
            required : true,
            minlength: 3
        },
        apellidos:{
            required: true,
            minlength: 3
        },
        email: {
            required: true,
            email: true
        },
        telefono: {
            required: true,
            number: true,
            minlength:9,
        },
        mensaje: {
            required: true,
            minlength: 15
        }

    },
    messages: {
        nombre:{
        required: 'Este campo es requerido',
        minlength : "El nombre tiene que tener al menos 3 caracteres"
        },
        apellidos: {
            required : 'Este campo es requerido',
            minlength: 'Los apellidos tienen que tener al menos 3 caracteres'
        },
        email: {
            required : 'Este campo es requerido',
            email : 'Por favor introduzca una dirección de correo válida'
        },
        telefono:{
            required: 'Este campo es requerido',
            number: 'Introduce un valor numérico para este campo',
            minlength: 'Mínimo 9 números para este campo'
        },
        mensaje : {
            required : 'Este campo es requerido',
            minlength : 'Escribe un mensaje de al menos 15 caracteres '
        }
    }

});


 });
