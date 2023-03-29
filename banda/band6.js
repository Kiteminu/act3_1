
function Colores(numColor){

  var newDiv = document.createElement("div");
  var newContent = document.createTextNode("COLORES");
  newDiv.appendChild(newContent); //añade texto al div creado.

  var nomC=nombreColor(numColor);

  var newP = document.createElement("p");
  var newColor = document.createTextNode( nomC );
  newP.appendChild(newColor);
  var colorB=defineColor(numColor);

  newP.style="border: 1px solid #999999; background-color:"+colorB+"; width: 100px ;height:30px";


// añade el elemento creado y su contenido al DOM

var currentDiv = document.getElementById("div");
document.body.appendChild(newDiv);
document.body.appendChild(newP);


}

function Calcular(b1,b2,b3,b4,b5,b6){ //se llama a los cuatro valores de los cuatro input, se necesitaran para el calculo

var valResistencia=(b1*100+b2*10+b3)*(10**b4); //Calculo del valor de la resistencia, solo se usa b1, b2 y b3

var tol=0; //valor default de la tolerancia en caso de errores

var ppm=0;

switch(parseInt(b5)){//se tiene que usar parseInt() para que el switch si lea el valor b4 como numero y no como string

  case 0:tol=20;break; //negro
  case 1:tol=1;break; //cafe  
  case 2:tol=2;break; //rojo
  case 3:tol=3;break; //naranja
  case 4:tol=4;break; //amarillo
  case 5:tol=0.5;break; //verde 
  case 6:tol=0.25;break; //azul
  case 7:tol=0.01;break; //violeta
  case 8:tol=0.05;break; //gris
  case 9:tol=0;break; //blanco (no tiene tolerancia)
  case 10:tol=5;break; //plata
  case 11:tol=10;break; //oro
  
}

switch(parseInt(b6)){//se tiene que usar parseInt() para que el switch si lea el valor b4 como numero y no como string

  case 0:ppm=250;break;
  case 1:ppm=100;break;
  case 2:ppm=50;break;
  case 3:ppm=15;break;
  case 4:ppm=25;break;
  case 5:ppm=20;break;
  case 6:ppm=10;break;
  case 7:ppm=5;break;
  case 8:ppm=1;break;
  case 9:ppm=0;break;
  case 10:ppm=0;break;
  case 11:ppm=0;break;
}


//crear un div con texto VALOR RESISTENCIA

var newDiv = document.createElement("div"); //crea el div
var newContent = document.createTextNode("VALOR RESISTENCIA"); //crea el texto
newDiv.appendChild(newContent); //agrega el texto

 //Agregar un parrafo que contenga el valor de la RESISTENCIA calculado así como su tolerancia

var newP = document.createElement("p"); //crea el parrafo <p>
var ResTole = document.createTextNode(valResistencia+"kΩ-"+tol+"%-"+ppm+"ppm");
//var ResTole = document.createTextNode(valResistencia+" con "+tol+"% de tolerancia y "+ppm+"ppm"); //esto es para agregar el valor de la resistencia  la tolerancia
  newP.appendChild(ResTole); //inserta el texto en p

//Agregar el div y el párrafo al doument
var currentDiv = document.getElementById("div"); //no se usa esta linea de codigo, pero la mantengo por cualquier cosa
document.body.appendChild(newDiv); //inserta el div al documento
document.body.appendChild(newP); //inserta el p al documento
}

function defineColor(n){

switch(parseInt(n)){
      case 0:return "rgb(90, 90, 90)";
      case 1:return "rgb(116, 40, 0)";
      case 2:return "rgb(255, 0, 0)";
      case 3:return "rgb(252, 99, 0)";
      case 4:return "rgb(252, 225, 0)";
      case 5:return "rgb(0, 255, 0)";
      case 6:return "rgb(0, 0, 255)";
      case 7:return "rgb(255, 0, 255)";
      case 8:return "rgb(150, 150, 150)";
      case 9:return "rgb(250, 250, 250)";
      case 10:return "rgb(216, 174, 30)";
      case 11:return "rgb(208, 208, 208)";
}
}

function nombreColor(n){

switch(parseInt(n)){
  case 0:return "NEGRO";
  case 1:return "CAFE";
  case 2:return "ROJO";
  case 3:return "NARANJA";
  case 4:return "AMARILLO"
  case 5:return "VERDE";
  case 6: return "AZUL";
  case 7: return "VIOLETA";
  case 8: return "GRIS";
  case 9: return "BLANCO";
  case 10: return "ORO";
  case 11: return "PLATA";

}
}
