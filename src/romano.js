function convertirRomano(numero)
{
    var romano=["I", "IV","V","X","XL"];
    var numeros=[1, 4,5,10,40];
    var i=numeros.length;
    var texto="";
    while(numero>0)
    {
        if(numeros[i]<=numero)
        {
          texto+=romano[i];
          numero=numero-numeros[i];
        }
        else
        {
          i--;
        }
    }
      return texto;

}

export default convertirRomano;