var conversions = document.getElementsByName('conversionType');

function changeConversion(element, type)
{
    selectedConversion = type; //changes conversion type
    resultado.value = ""; //cleans too
    
    if(type == 'bin')
    {
        element.classList.add('binarySelected');//gives blue color
        conversions[1].classList.remove('octalSelected'); //remove class if exists
        conversions[2].classList.remove('hexSelected'); //remove class if exists
        document.body.className = 'blueBg'; //changes body bakcgorund
        document.getElementById("conversorTitle").innerHTML = "Decimal a Binario";//changes title
    }

    else if(type == 'oct')
    {
        element.classList.add('octalSelected');
        conversions[0].classList.remove('binarySelected');
        conversions[2].classList.remove('hexSelected');
        document.body.className = 'yellowBg';
        document.getElementById("conversorTitle").innerHTML = "Decimal a Octal";
    }

    else if(type == 'hex')
    {
        element.classList.add('hexSelected');
        conversions[0].classList.remove('binarySelected');
        conversions[1].classList.remove('octalSelected');
        document.body.className = 'redBg';
        document.getElementById("conversorTitle").innerHTML = "Decimal a Hexadecimal";
    }
}