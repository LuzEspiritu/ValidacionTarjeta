//validar número de tarjeta usando el algoritmo luhn
function validar(numeroTarjeta)
{
//divide el strin enviando y lo convierte en un Array
divididoArray=numeroTarjeta.split("");
//revierte la posición de los elementos del Array
divididoArray.reverse();
//haciendo iteración del Array--->divididoArray
for(i=0;i<10;i++)
 {
   var number = parseInt(divididoArray[i]);//convierte el string recibido a número y lo guarda en una variable
   if(i%2!==0)
    {
     var pairMultiplied=divididoArray[i]*2; //pairMultiplied ---> guarda la multiplicación del elemento que cumple la condición * 2
    if(pairMultiplied>=10)
    {
    firstValue=parseInt(pairMultiplied/10)//firstValue---> guarda el primer dígito que resultó de la multiplicación
    secondValue=pairMultiplied%10; //secondValue---> guarda el segundo dígito del número que resultó de la multiplicacion.
    sumValues=firstValue+secondValue;//sumValues---> suma ambos digitos.
    divididoArray[i]=sumValues;//el elemento del array en dicha posición tomará como valor la suma de ambos dígitos.
    }else{
          divididoArray[i]=pairMultiplied;
      }

     }else{
       divididoArray[i]=parseInt(divididoArray[i]);
     }
 }
return divididoArray;
}
//preguntando datos al usuario.
do{
  var numeroTarjeta= prompt("Escribe tu número de tarjeta");
  validar(numeroTarjeta);
}while(message.length==0)
