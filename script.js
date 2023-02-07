// DOM Elements

const billGroupEl = document.getElementById('bill-group');
const billInputEl = document.getElementById('bill');

// Take input from user
// Validate input
    // Check if there are letters in input value
    // If yes, show an error message
    // If not, then take the input value 

billInputEl.addEventListener("keyup", function(event){
    event.preventDefault();
    let fired = false;
    if(event.key === 'Enter'){
        let billValue = billInputEl.value;
        // if (!billValue.match( /^[a-zA-Z]+$/)){
        if (isNaN(parseFloat(billValue)) && fired === false){
            showErrorMsg();
            fired = true;
        }
        else{
            // Also remove error message
            fired = false;
            removeErrorMsg();
            // return input as number
            return parseFloat(billValue);
        }

        // console.log(typeof(billInputEl.value));
        // return billInputEl.value;
    }
});

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
