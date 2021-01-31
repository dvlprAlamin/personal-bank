// Login button event handler
document.getElementById('login-btn').addEventListener('click', function(){
    document.getElementById('login-area').style.display = "none";
    document.getElementById('transaction-area').style.display = "block";
});


// input validator function
function inputValidator(inputType) {
    let inputAmount = document.getElementById(inputType + '-amount');
    let newAmount = inputAmount.value;
    if(isNaN(newAmount) || newAmount <= 0){
        document.getElementById('warningAlert').style.display = "inline-block";
        setTimeout(() => {
            document.getElementById('warningAlert').style.display = "none" 
        }, 2000);
        inputAmount.value = '';
    }
    else{
        addAmount(inputType);
        inputAmount.value = '';    
    }
}


// input button event handler function
function inputButtonHandler(inputType) {
    inputValidator(inputType);
}


// add amount function
function addAmount(inputType) {
    let newAmount = parseFloat(document.getElementById(inputType + '-amount').value);
    const oldAmount = parseFloat(document.getElementById(inputType).innerText);
    document.getElementById(inputType).innerText = oldAmount + newAmount;
    const Balance = document.getElementById('balance');
    const currentBalance = parseFloat(Balance.innerText);
    if(inputType == 'withdraw'){
        newAmount = newAmount * -1;
    }
    Balance.innerText = currentBalance + newAmount;
}