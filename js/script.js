//jquery
$(document).ready(function () {
  $("#p-color-r").click(function () {
    var pcr = $("#p-color-r:checked").val();
    if (pcr == 'on') {
      $(".product-name h1").css({"color": "#eb2e2e", "transition": "background .3s ease-in-out"});
      $(".product-cost h1").css({"color": "#eb2e2e", "transition": "background .3s ease-in-out"});
      $(".product-type h1").css({"color": "#eb2e2e", "transition": "background .3s ease-in-out"});
      $("body").css({"background": "#eb2e2e", "transition": "background .3s ease-in-out"});
    }
  });
  $("#p-color-g").click(function () {
    var pcg = $("#p-color-g:checked").val();
    if (pcg == 'on') {
      $(".product-name h1").css({"color": "#68a717", "transition": "background .3s ease-in-out"});
      $(".product-cost h1").css({"color": "#68a717", "transition": "background .3s ease-in-out"});
      $(".product-type h1").css({"color": "#68a717", "transition": "background .3s ease-in-out"});
      $("body").css({"background": "#68a717", "transition": "background .3s ease-in-out"});
    }
  });
  $("#p-color-b").click(function () {
    var pcb = $("#p-color-b:checked").val();
    if (pcb == 'on') {
      $(".product-name h1").css({"color": "#1d88a8", "transition": "background .3s ease-in-out"});
      $(".product-cost h1").css({"color": "#1d88a8", "transition": "background .3s ease-in-out"});
      $(".product-type h1").css({"color": "#1d88a8", "transition": "background .3s ease-in-out"});
      $("body").css({"background": "#1d88a8", "transition": "background .3s ease-in-out"});
    }
  });
});
