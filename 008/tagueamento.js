$(document).ready(function() {
   buttonClick();
});

function buttonClick() { // click no botão
   $('#botao button').on('click', function(e) {
       $('#mensagem').on("DOMSubtreeModified", function(e) {
           var valueMessage = $('#mensagem div').text();
           if($(this).find('div').length > 0) { // existe mensagem
               alert(valueMessage);
               console.log(valueMessage);
               e.stopPropagation();
               e.stopImmediatePropagation();
           }
       });
   });
}
