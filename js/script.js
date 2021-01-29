// Login button event handler
document.getElementById('login-btn').addEventListener('click', function(){
    document.getElementById('login-area').style.display = "none";
    document.getElementById('transaction-area').style.display = "block";
});


// input validator function
function inputValidator(inputType) {
    let inputAmount = document.getElementById(inputType + '-amount');
    if(typeof parseFloat(inputAmount.value) != "number" || inputAmount.value <= 0){
        alert('Enter a valid amount');
        inputAmount.value = '';
        return;
    }
}


// input button event handler function
function inputButtonHandler(inputType) {
    inputValidator(inputType);
    addAmount(inputType);
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