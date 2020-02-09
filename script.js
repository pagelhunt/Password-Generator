
var lowercharset = "qwertyuiopasdfghjklzxcvbnm";
var upperCharset ="QWERTYUIOPASDFGHJKLZXCVBNM";
var numberSet ="1234567890";
var specCharset ="!@#$%^&*()";
var randSet ="";
var numChars = document.getElementById("charNum");
var randString = "";

var lowerCheck = false;
var upperCheck = false;
var numberCheck = false;
var specCheck = false;

numChars.value.trim();

numCharsint = parseInt(numChars.value);

function randChar()
{
    var randNum = Math.floor(Math.random() * randSet.length);
    var randChar = randSet[randNum];

    return randChar;
}
document.getElementById("generateButton").onclick = function()
{

    if(document.getElementById("lowerChar").checked)
    {
        lowerCheck = true;
        randSet += lowercharset;
    }
    else
    {
        lowerCheck = false;
    }
    if(document.getElementById("upperChar").checked)
    {
        upperCheck = true;
        randSet += upperCharset
    }
    else
    {
        upperCheck = false;
    }
    if(document.getElementById("number").checked)
    {
        numberCheck = true;
        randSet += numberSet;
    }
    else
    {
        numberCheck = false;
    }
    if(document.getElementById("specialChar").checked)
    {
        specCheck = true;
        randSet += specCharset;
    }
    else
    {
        specCheck = false;
    }
    console.log(numCharsint);
    for (var i = 0; i < numCharsint; i++)
    {
        randString += randChar();
    }

    console.log(lowerCheck);
    console.log(upperCheck);
    console.log(numberCheck);
    console.log(specCheck);
    
    console.log(randString);
}