const boton = document.getElementById("miBoton");
    /*Evento con funcion*/
boton.addEventListener("click", function(event){
  event.preventDefault();
  
    /*Variables Flotantes , para calcular el imc con decimas*/
  for (let i = 1; i <= 10; i++) {
    const altura = parseFloat(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("peso").value);

    const imc = peso / (altura * altura);
    setTimeout(function () {
      document.getElementById("resultado").innerHTML = "";
    }, 9000);

    /*Condicional sobre el resultado*/
    if(imc <= 24.9){
        document.getElementById("resultado").innerHTML =
        "Normal, IMC: " + imc.toFixed(2);
    } else if ( imc <= 29.9){
        document.getElementById("resultado").innerHTML =
        "Sobrepeso, IMC: " + imc.toFixed(2);
    } else if (imc <= 34.9){
        document.getElementById("resultado").innerHTML =
        "Obesidad Grado 1, IMC: " + imc.toFixed(2);
    } else if (imc <= 39.9){
        document.getElementById("resultado").innerHTML =
        "Obesidad Grado 2, IMC: " + imc.toFixed(2);
    } else if (imc >= 40){
        document.getElementById("resultado").innerHTML =
        "Obesidad Grado 3, IMC: " + imc.toFixed(2);
    } else {
        document.getElementById("resultado").innerHTML = "Datos invalidos!"
    }
    console.log(i);
  }
});
