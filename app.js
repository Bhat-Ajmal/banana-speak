btnTranslate=document.querySelector('#btn-translate');
txtInput=document.querySelector('#txt-input');
outputDiv=document.querySelector('#output');


btnTranslate.addEventListener('click', function functionName() {
    console.log('clicked!');            //THIS//
    console.log(txtInput.value);        //& THIS are outputed on console.//
    outputDiv.innerText ="translated: " + txtInput.value
})


//                 2ND WAY TOWRITE A FUNCTION
// btnTranslate.addEventListener('click',functionName)
// function functionName()
// {

//     console.log('clicked!');  
//   };