document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show');
}); 


/* document.querySelector para seleccionar un elemento*/
/* Vamos a añadir una clase .classList y vamos a añadir una clase llamada show, pero quiero que esta clase cada que yo haga click se cambie, si ya la tiene quítela y sino que la ponga, para eso utilizamos un método llamado toogle */

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.modules', {delay: 300});
ScrollReveal().reveal('.banner', {delay: 300});
ScrollReveal().reveal('.social', {delay: 300});
ScrollReveal().reveal('.footer', {delay: 300});

$(document).ready(function() {

    $(window).scroll(function(){
        if($(this).scrollTop() > 0){
            $('header').addClass('header2');
        } else {
            $('header').removeClass('header2');
        }
    });

});
