var numeroTarjeta=("1234445566");
function validar(numeroTarjeta)
{
divididoArray=numeroTarjeta.split("");
divididoArray.reverse();
for(i=0;i<10;i++)
 {
   var number = parseInt(divididoArray[i]);
   if(i%2!==0)
    {
     var pairMultiplied=divididoArray[i]*2;
    if(pairMultiplied>=10)
    {
    firstValue=parseInt(pairMultiplied/10)//1,2--->1
    secondValue=pairMultiplied%10; //12%10--->2
    sumValues=firstValue+secondValue;//1+2=3
    divididoArray[i]=sumValues;//divididoArray[2]=3
    }else{
          divididoArray[i]=pairMultiplied;
      }

     }else{
       divididoArray[i]=parseInt(divididoArray[i]);
     }
 }
return divididoArray;
}
do{
  var message= prompt("Escribe tu número de tarjeta");
  validar(numeroTarjeta);
}while(message.length==0)
