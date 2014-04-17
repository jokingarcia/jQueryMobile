/*-Varios documentos HTML con varias vistas (pages) y poder navegar entre ellos
-Utilizar paneles, popups y diálogos
-Añadir botones, listviews, navbars, transiciones, distintos tipos de inputs, ...
-Cambiar el comportamiento de ciertos widgets y paginas utilizando contenido dinámico y
 capturar eventos (tap, pagebeforecreate, ...)*/

$("#page1").bind( "pagebeforecreate", function( event ) {
    console.log("pagebeforecreate");
    $("footer").load("include/commonFooter.html", function(){
        $("#footer").trigger("create");
    });
});
$("p").bind( "tap", function( event ) {
    //alert("tap");
    console.log("tap");
    $(this).hide();
});
$("#page1").bind( "taphold", function( event ) {
    alert("taphold");
    console.log("taphold");

});
$("#page1").bind( "swipe", function( event ) {
   
});
$(document).bind( "swipeleft", function( event ) {
    console.log("swipeleft");
    //pasar a la página de vinos
    $.mobile.changePage("mipagina.html#page2");
});
$(document).bind( "swiperight", function( event ) {
     console.log("swiperight");
    //pasar a la página de cervezas
    $.mobile.changePage("mipagina.html");
});
$("#choice-1").bind( "vmouseover", function( event ) {
    console.log("vmouseover");
    $(this).append('<img id ="choice-guinness" src="images/Guinness.jpg" />');
});
$("#choice-1").bind( "vmouseout", function( event ) {
    console.log("vmouseout");
    $(this).find("#choice-guinness").remove();
});
$("#choice-2").bind( "vmouseover", function( event ) {
    console.log("vmouseover");
    $(this).append('<img id ="choice-murphys" src="images/Murphys.jpg" />');
});
$("#choice-2").bind( "vmouseout", function( event ) {
    console.log("vmouseout");
    $(this).find("#choice-murphys").remove();
});
$("#choice-3").bind( "vmouseover", function( event ) {
    console.log("vmouseover");
    $(this).append('<img id ="choice-rasputin" src="images/Rasputin.jpg" />');
});
$("#choice-3").bind( "vmouseout", function( event ) {
    console.log("vmouseout");
    $(this).find("#choice-rasputin").remove();
});
$("#choice-4").bind( "vmouseover", function( event ) {
    console.log("vmouseover");
    $(this).append('<img id ="choice-punk" src="images/Punk.jpg" />');
});
$("#choice-4").bind( "vmouseout", function( event ) {
    console.log("vmouseout");
    $(this).find("#choice-punk").remove();
});
$("#page1").bind( "vmousedown", function( event ) {
    fconsole.log("vmousedown");
});
$("#page1").bind( "vmousemove", function( event ) {
    //console.log("vmousemove");
});
$("#page1").bind( "vmouseup", function( event ) {
    //console.log("vmouseup");
});
$("#page1").bind( "vclick", function( event ) {
    //console.log("vclick");
});
$("#page1").bind( "vmousecancel", function( event ) {
    //console.log("vmousecancel");
});
$("#page1").bind( "orientationchange", function( event ) {
    console.log("orientationchange");
});
$("#page1").bind( "scrollstart", function( event ) {
    console.log("scrollstart");
});
$("#page1").bind( "scrollstop", function( event ) {
    console.log("scrollstop");
});
$("#page1").bind( "pagebeforeload", function( event ) {
    console.log("pagebeforeload");
});
$("#page1").bind( "pageload", function( event ) {
    console.log("pageload");
});
$("#page1").bind( "pageloadfailed", function( event ) {
    console.log("pageloadfailed");
});

$("#page1").bind( "pagebeforechange", function( event ) {
    console.log("pagebeforechange");
});
$("#page1").bind( "pagechange", function( event ) {
    console.log("pagechange");
});
$("#page1").bind( "pagechangefailed", function( event ) {
    console.log("pagechangefailed");
});

$("#page1").bind( "pagebeforeshow", function( event ) {
    console.log("pagebeforeshow");
});
$("#page1").bind( "pagebeforehide", function( event ) {
    console.log("pagebeforehide");
});
$("#page1").bind( "pageshow", function( event ) {
    console.log("pageshow");
});
$("#page1").bind( "pagehide", function( event ) {
    console.log("pagehide");
});

$("#page1").bind( "pagebeforecreate", function( event ) {
    console.log("pagebeforecreate");
});
$("#page1").bind( "pagecreate", function( event ) {
    console.log("pagecreate");
});
$("#page1").bind( "pageinit", function( event ) {
    console.log("pageinit");
});

$("#page1").bind( "pageremove", function( event ) {
    console.log("pageremove");
});

$("#page1").bind( "updateLayout", function( event ) {
    console.log("updateLayout");
});
