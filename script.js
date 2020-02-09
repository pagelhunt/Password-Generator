
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
function copyToClipboard() {

    var copyText = document.getElementById("passArea");
  
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    
    document.execCommand("copy");
  
    alert("Copied the text: " + copyText.value);
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
    if (lowerCheck === false && upperCheck === false && numberCheck === false && specCheck === false)
    {
        alert("Please check at least one option!");
    }else
    {
        console.log(numChars);
        for (var i = 0; i < numChars; i++)
        {
            randString += randChar();
        }
    document.getElementById("passArea").value = randString
    console.log(numChars);
    console.log(lowerCheck);
    console.log(upperCheck);
    console.log(numberCheck);
    console.log(specCheck);
    
    console.log(randString);
}
    document.getElementById("copyBtn").onclick = function()
    {
        copyToClipboard();
    }
}
