//validar número de tarjeta usando el algoritmo luhn
function validar(numeroTarjeta)
{
var divididoArray=numeroTarjeta.split("");//divide el strin enviando y lo convierte en un Array
divididoArray.reverse();//revierte la posición de los elementos del Array
var suma=0;
for(i=0;i<10;i++)//haciendo iteración del Array--->divididoArray
{
   var number = parseInt(divididoArray[i]);//convierte el string recibido a número y lo guarda en una variable
   if(i%2!==0)
    {
    var pairMultiplied=divididoArray[i]*2; //pairMultiplied ---> guarda la multiplicación del elemento que cumple la condición * 2
     if(pairMultiplied>=10)
     {
      var firstValue=parseInt(pairMultiplied/10)//firstValue---> guarda el primer dígito que resultó de la multiplicación
      var secondValue=pairMultiplied%10; //secondValue---> guarda el segundo dígito del número que resultó de la multiplicacion.
      var sumValues=firstValue+secondValue;//sumValues---> suma ambos digitos.
        divididoArray[i]=sumValues;//el elemento del array en dicha posición tomará como valor la suma de ambos dígitos.
        suma=suma+divididoArray[i];
      }else{
          divididoArray[i]=pairMultiplied;
          suma=suma+divididoArray[i];
         }
   }else
    {
    divididoArray[i]=parseInt(divididoArray[i]);
    suma=suma+divididoArray[i];
    }
}

 //verificando si la tarjeta es valida o inválida
 if(suma%10===0){
   return "tarjeta valida"
  }
 return "tarjeta invalida"
}
//preguntando datos al usuario.
do{
  var numeroTarjeta= prompt("Escribe tu número de tarjeta");
  validar(numeroTarjeta);
}while(message.length==0)
