// Copy the selected text to the clipboard
    /* The `document.execCommand('copy')` function is used to copy the selected text to the clipboard.
    It is a built-in JavaScript function that allows you to perform various editing operations on
    the document. In this case, it is used to copy the text from the textarea element to the
    clipboard so that it can be pasted elsewhere. */
document.getElementById('pxinput').addEventListener('input', function (){
  pxToRem()
})

function pxToRem(){
  const pxinput = document.getElementById("pxinput").value;
  const remoutput = document.getElementById("remoutput")

  if(!isNaN(pxinput)){
    const remval = (pxinput / 18).toFixed(2);
    remoutput.textContent = remval + 'rem';
  }else{
    remoutput.textContent = 'input px';
  }
}
// JavaScript code to copy the content from the div
document.getElementById('copybutton').addEventListener('click', function () {
    copyToClipboard('remoutput');
});

function copyToClipboard(elementId) {
    // Create a new textarea element to temporarily hold the text
    const textarea = document.createElement('textarea');
    textarea.value = document.getElementById(elementId).innerText;
    
    // Append the textarea to the document
    document.body.appendChild(textarea);
    
    // Select the text within the textarea
    textarea.select();
    
  
    document.execCommand('copy');
    
    // Remove the temporary textarea
    document.body.removeChild(textarea);
    document.getElementById("copybutton").innerHTML="copied"
    // Provide feedback to the user (optional)
    new Promise((resolve, reject) => {
      setTimeout(()=>{
        document.getElementById("copybutton").innerHTML="copy"
      }, 3000)
    })
}