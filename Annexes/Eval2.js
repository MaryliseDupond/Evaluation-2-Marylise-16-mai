$("#finDate").click(
    function(){
        var placeholderFin = $("#finDate").val();
        console.log("click détecté");
        $("#finText").val(placeholderFin);
    })

 $("#btnMenu").click(function () {
     console.log("click détecté");
     $("#menuList").toggle()
 })

 var background = [];
 background[0] = ["background.jpg"];
 background[1] = ["background2.jpg"];
 background[2] = ["background3.jpg"];
 background[3] = ["background4.jpg"];
 var index = 0;
 function change() {
    document.mainPhoto.src = background[index];
    if (index == 2) {
      index = 0;
    } else {
      index++;
    }
  
    setInterval(change(), 1500);
  }
  
  window.onload = change();

    var slide = new Array("vehicule1_gauche.png", "vehicule1.png");
var numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src = slide[numero];
}

var slide2 = new Array("vehicule2b.png", "vehicule2.png");
var numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src = slide[numero];
}

var slide3 = new Array("vehicule3b.png", "vehicule3.png");
var numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src = slide[numero];
}

var slide4 = new Array("vehicule4b.png", "vehicule4.png");
var numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src = slide[numero];
}