function convertirRomano(numero)
{
    var romano=["I", "IV","V"];
    var numeros=[1, 4,5];
    var i=numeros.length-1;
    var texto="";
    while(numero>0){
        if(numeros[i]<=numero){
          texto+=romano[i];
          numero=numero-numeros[i];
        }else{
          i--;
        }
      }
      return texto;

}

export default convertirRomano;