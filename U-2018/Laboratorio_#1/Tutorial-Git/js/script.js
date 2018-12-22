$(document).ready(function(){

    $(".contenido-guia").children().hide();
    $(".contenido-guia").children("div#seccion_guia_basica_git").show();

    $(".lista-enlace > li > a").click(function() {
        $(".contenido-guia").children().hide();
        $(".contenido-guia").children("div#seccion_"+$(this).attr("id")).show();
    });

    $("#ir_seccion_crear_repositorio").click(function() {
        $(".contenido-guia").children().hide();
        $(".contenido-guia").children("div#seccion_crear_repositorio").show();
    });

    $("#ir_seccion_sincronizar_cambios").click(function() {
        $(".contenido-guia").children().hide();
        $(".contenido-guia").children("div#seccion_sincronizar_cambios").show();
    });
});