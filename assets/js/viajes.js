/*funcion click con alerta*/
$("#enviar-correo").click(function () {
    alert("El correo fue enviado correctamente...");
  });
  /*funcion doble click con cambio de color en texto*/
  $(document).ready(function () {
    $("#Contacto").on("dblclick", function () {
      $("#Contacto").css("color", "yellow");
    });
  });
   
  $(document).ready(function () {
      $("#quienes").on("dblclick", function () {
        $("#quienes").css("color", "yellow");
      });
    });

$(document).ready(function () {
  $("#contactocambio").on("dblclick", function () {
    $("#contactocambio").css("color", "yellow");
     });
    });
  
   