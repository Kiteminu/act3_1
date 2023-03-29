
function ultrakill(){

    var newDiv = document.createElement("div");
    var newContent = document.createTextNode("ESTAS SEGURO?");
    newDiv.appendChild(newContent); //añade texto al div creado.

    var newButt = document.createElement("BUTTON");
    newText=document.createTextNode("Aceptar");
   // newButt.onClick('annihilape();');
    newButt.appendChild(newText);

// añade el elemento creado y su contenido al DOM

var currentDiv = document.getElementById("div");
 document.body.appendChild(newDiv);
 document.body.appendChild(newButt);


}

function annihilape(){

    var newDiv = document.createElement("div");
    var newContent = document.createTextNode("it really is that easy");
    newDiv.appendChild(newContent); 
var currentDiv = document.getElementById("div");
 document.body.appendChild(newDiv);

}