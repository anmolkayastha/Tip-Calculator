// DOM Elements

const billGroupEl = document.getElementById('bill-group');
const billInputEl = document.getElementById('bill');
const tipAmtEl = document.getElementById('tip-amt-num');
const totalAmtEl = document.getElementById('total-amt-num');

// Take input from user
// Validate input
    // Check if there are letters in input value
    // If yes, show an error message
    // If not, then take the input value 
    
// Flag for whether error message was displayed
let fired = false;

// When user presses enter, validate input
billInputEl.addEventListener("keyup", function(event){
    event.preventDefault();
    if(event.key === 'Enter'){
        let billValue = billInputEl.value;
        validateInput(billValue);
    }
});

function validateInput(billSubTotal){
    if (isNaN(parseFloat(billSubTotal))){
        if(!fired){
            showErrorMsg();
            fired = true;
        }
    }
    // if input is okay
    else{   
        // Remove error message if it's there
        if(fired === true){
            removeErrorMsg();
            fired = false;
        }
        // return input as number
        return parseFloat(billSubTotal); 
    }
}
function showErrorMsg(){
    let span = document.createElement('span');
    span.textContent = "Please enter a number";
    span.setAttribute('class','error');
    span.setAttribute('id','error');
    billGroupEl.appendChild(span);
    console.log("function running");
}

function removeErrorMsg(){
 let errorMsg = document.getElementById('error');
   errorMsg.remove();
}

// function getBillSubTotal(event){
//     event.preventDefault();
//     if(event.keyCode == 13){
//         console.log(billInputEl.value);
//         // return billInputEl.value;
//     }
// }
