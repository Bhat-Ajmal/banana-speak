btnTranslate=document.querySelector('#btn-translate');
txtInput=document.querySelector('#txt-input');
outputDiv=document.querySelector('#output');
var serverURL = "https://api.funtranslations.com/translate/minion.json"    //only 5 times in hour.
// console.log(outputDiv);  (By this we can output any html element on onsole)
// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with the server. Try again after some time");
}

btnTranslate.addEventListener('click', function functionName() {
    var inputText = txtInput.value;
    fetch(getTranslationURL(inputText))
    .then(Response => Response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
    })
    .catch(errorHandler)

})



//                 2ND WAY TOWRITE A FUNCTION
// btnTranslate.addEventListener('click',functionName)
// function functionName()
// {

//     console.log('clicked!');  
//   };
