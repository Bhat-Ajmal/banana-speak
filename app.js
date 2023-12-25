btnTranslate=document.querySelector('#btn-translate');
txtInput=document.querySelector('#txt-input');
outputDiv=document.querySelector('#output');
// console.log(outputDiv);   (By this we can output any html element on onsole)


btnTranslate.addEventListener('click', function functionName() {
    console.log(txtInput.value);        //THIS is outputed on console.   (.value is used to read the values)//
    outputDiv.innerText ="translated: " + txtInput.value      // .innerText is used to wirte values
})


//                 2ND WAY TOWRITE A FUNCTION
// btnTranslate.addEventListener('click',functionName)
// function functionName()
// {

//     console.log('clicked!');  
//   };