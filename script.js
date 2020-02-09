
var lowercharset = "qwertyuiopasdfghjklzxcvbnm";
var upperCharset ="QWERTYUIOPASDFGHJKLZXCVBNM";
var numberSet ="1234567890";
var specCharset ="!@#$%^&*()";
var randSet ="";

var randString = "";

var lowerCheck = false;
var upperCheck = false;
var numberCheck = false;
var specCheck = false;

function randChar()
{
    var randNum = Math.floor(Math.random() * randSet.length);
    var randChar = randSet[randNum];

    return randChar;
}
document.getElementById("generateButton").onclick = function()
{
    var numChars = document.getElementById("charNum").valueAsNumber;
    randSet = "";
    randString = ""

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
    console.log(numChars);
    for (var i = 0; i < numChars; i++)
    {
        randString += randChar();
    }

    var pass = document.createElement("p");
    var passChars = document.createTextNode("Your new password is: " + randString);
    var passHolder = document.getElementById("passHolder");
    pass.appendChild(passChars);

    passHolder.appendChild(pass);


    console.log(numChars);
    console.log(lowerCheck);
    console.log(upperCheck);
    console.log(numberCheck);
    console.log(specCheck);
    
    console.log(randString);
}