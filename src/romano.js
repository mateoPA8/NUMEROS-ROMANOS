function convertirRomano(numero)
{
    var texto="";
    for(let i=0;i<numero;i++)
    {
        texto+="I";
    }
    return texto;
}

export default convertirRomano;