function reverseString(string)
{
    var array = string.split("");
    
    var reversedArr = array.reverse();
    
    var joinArray = reversedArr.join("");
    
    return joinArray;
}