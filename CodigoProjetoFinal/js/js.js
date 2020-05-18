jQuery(document).ready(function() {
    jQuery('.toggle-nav').click(function(e) {
        jQuery(this).toggleClass('active');
        jQuery('.menu ul').toggleClass('active');

        e.preventDefault();
    });
})

$(document).ready(function(){
    $("#hide").click(function(){
        $("p").hide();
    });
    $("#show").click(function(){
        $("p").show();
    });
})


function rodape1() {
    var dados = JSON.parse('<p>(31)36548-5248<br>\n' +
        '<a href="mailto:#">bifaolinguica@gmail.com</a><br>\n' +
        'Rua Alice Maria de Oliveira, 23 - Veneza - Ribeirão das Neves - Minas Gerais</p>');
    dados.forEach(function (pe) {
        document.body.innerHTML += '<p>'+dados.text()+'</p>';
    })
}
