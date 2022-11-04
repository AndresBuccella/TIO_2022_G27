let enviar=document.querySelector("#btn");
let caprandom=Math.floor(Math.random() * 10000) ;
screenrandom.innerHTML = caprandom;

console.log("asd");
enviar.addEventListener("click",function(){
  let resultado= document.querySelector("#mensaje");
  let inputCaptcha = document.querySelector("#captcha");
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let mail = document.getElementById("mail").value;


if(inputCaptcha.value == caprandom && (nombre.length>=1) && (apellido.length>=1) && (mail.length>=1)){
    resultado.innerHTML = "Registro Enviado!";
  }

else if(inputCaptcha.value==caprandom || inputCaptcha.value!==7  && (nombre.length==0) || (apellido.length==0) || (mail.length ==0)){
    resultado.innerHTML = "Falta completar formulario"
}

else{
    resultado.innerHTML = "ERROR CAPTCHA";
}

})
