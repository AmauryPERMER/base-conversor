function decTobinary(value)
{
    if(value < 0)
        value = value * -1;
    
    //-----------------------------------------integer part-----------------------------------------
    var integer = "" + parseInt(value, 10).toString(2);
    
    
    //-----------------------------------------decimal part-----------------------------------------
    var withOutFloating = ~~value;//no decimal value
    var floating = value - withOutFloating;
    
    var resultToStr = 0;
    
    var floatingStr = "";
    
    for(i = 0; i < 15; i++)
    {
        resultToStr = floating * 2;
        withOutFloating = ~~resultToStr;
        floating = resultToStr - withOutFloating;
        
        floatingStr += withOutFloating;  
    }
    
    var result = integer + "."+floatingStr;
    
    return result;
}