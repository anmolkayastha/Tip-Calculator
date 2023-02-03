// DOM Elements

const billInputEl = document.getElementById('bill');

// Take input from user
// Validate input
    // Check if there are letters in input value
    // If yes, show an error message
    // If not, then take the input value 

billInputEl.addEventListener("keyup", function(event){
    event.preventDefault();
    if(event.key === 'Enter'){
        let bill = billInputEl.value;
        if (bill.match( /^[a-zA-Z]+$/)){
            console.log("Error: Input has letters");
        }
        else{
            console.log(bill);
        }

        // console.log(typeof(billInputEl.value));
        // return billInputEl.value;
    }
});

// function getBillSubTotal(event){
//     event.preventDefault();
//     if(event.keyCode == 13){
//         console.log(billInputEl.value);
//         // return billInputEl.value;
//     }
// }
