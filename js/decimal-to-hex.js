function decToHex(value)
{
    if(value < 0)
        value = value * -1;
    
    //-----------------------------------------integer part-----------------------------------------
    var integer = "" + parseInt(value, 10).toString(16);
    
    
    //-----------------------------------------decimal part-----------------------------------------
    var withOutFloating = ~~value;//no decimal value
    var floating = value - withOutFloating;//decimal part
    
    var resultToStr = 0;
    
    var floatingStr = "";
    
    for(i = 0; i < 15; i++)
    {
        resultToStr = floating * 16;
        
        withOutFloating = ~~resultToStr;
           
        floating = resultToStr - withOutFloating;
        
        if(withOutFloating >= 10)
            withOutFloating = parseInt(withOutFloating, 10).toString(16);
        
        floatingStr += withOutFloating;  
    }
    
    var result = integer + "."+floatingStr;
    result = result.toUpperCase();
    
    return result;
}