// DOM Elements

const billGroupEl = document.getElementById('bill-group');
const billInputEl = document.getElementById('bill');
const tipAmtEl = document.getElementById('tip-amt-num');
const totalAmtEl = document.getElementById('total-amt-num');
const resetBtnEl = document.getElementById('reset');

const tip_5_El = document.getElementById('tip-5');
const tip_10_El = document.getElementById('tip-10');
const tip_15_El = document.getElementById('tip-15');
const tip_20_El = document.getElementById('tip-20');
const tip_custom_El = document.getElementById('tip-custom');




    
// Flag for whether error message was displayed
let fired = false;


// 5% tip
tip_5_El.addEventListener('click', function(event){
    if(validateInput(billInputEl.value)){
        let tip_percentage = 5;
        calculateTip(tip_percentage);
    }
});

// 10% tip
tip_10_El.addEventListener('click', function(event){
    if(validateInput(billInputEl.value)){
        let tip_percentage = 10;
        calculateTip(tip_percentage);
    }
});

// 15% tip
tip_15_El.addEventListener('click', function(event){
    if(validateInput(billInputEl.value)){
        let tip_percentage = 15;
        calculateTip(tip_percentage);
    }
});

// 20% tip
tip_20_El.addEventListener('click', function(event){
    if(validateInput(billInputEl.value)){
        let tip_percentage = 20;
        calculateTip(tip_percentage);
    }
});


// Custom tip
tip_custom_El.addEventListener('keypress', function(event){
    if(event.key === "Enter"){
        event.preventDefault();
        if(validateInput(billInputEl.value)){
            const custom_tip_percentage = parseFloat(tip_custom_El.value);
            calculateTip(custom_tip_percentage);
        }
    }
});

// Reset
    // Clear input fields
    // Set tip amount and total to zero
resetBtnEl.addEventListener('click', function(event){  
    billInputEl.value = '';
    tip_custom_El.value = '';
    tipAmtEl.innerHTML = '$0.00';
    totalAmtEl.innerHTML = '$0.00';
});


// Calculate tip
function calculateTip(tip_percentage){
    billSubTotal = parseFloat(billInputEl.value);
        let tip_amt = billSubTotal * tip_percentage / 100;
        updateTipAmt(tip_amt);
        updateTotalAmt(tip_amt, billSubTotal);
}
    

// Check whether input is a number and display erorr messages if needed
function validateInput(billSubTotal){
    if (isNaN(parseFloat(billSubTotal))){
        if(!fired){
            showErrorMsg();
            fired = true;
        }
        return false;
    }
    // if input is okay
    else{   
        // Remove error message if it's there
        if(fired === true){
            removeErrorMsg();
            fired = false;
        }
        return true;
    }
}

// Display error message
function showErrorMsg(){
    let span = document.createElement('span');
    span.textContent = "Please enter a number";
    span.setAttribute('class','error');
    span.setAttribute('id','error');
    billGroupEl.appendChild(span);
}

// Remove error message
function removeErrorMsg(){
 let errorMsg = document.getElementById('error');
   errorMsg.remove();
}

// Change HTML element to display tip amount
function updateTipAmt(tip_amt){
    tipAmtEl.innerHTML  = '$' + tip_amt.toFixed(2);
}

// Change HTML element to display total with tip
function updateTotalAmt(tip_amt, subTotal){
    let totalAmt = tip_amt + subTotal;
    totalAmtEl.innerHTML = '$' + totalAmt.toFixed(2);
}

