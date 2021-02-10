// Login button event handler
document.getElementById('login-btn').addEventListener('click', function(){
    document.getElementById('login-area').style.display = "none";
    document.getElementById('transaction-area').style.display = "block";
});


// input validator function
function inputButtonHandler(inputType) {
    let inputAmount = document.getElementById(inputType + '-amount');
    let newAmount = inputAmount.value;
    const Balance = document.getElementById('balance');
    const currentBalance = parseFloat(Balance.innerText);
    if(isNaN(newAmount) || newAmount <= 0 || newAmount > currentBalance){
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

// add amount function
function addAmount(inputType) {
    let newAmount = parseFloat(document.getElementById(inputType + '-amount').value);
    const oldAmount = parseFloat(document.getElementById(inputType).innerText);
    document.getElementById(inputType).innerText = oldAmount + newAmount;
    const Balance = document.getElementById('balance');
    const currentBalance = parseFloat(Balance.innerText);
    if(inputType === 'withdraw'){
        newAmount = newAmount * -1;
    }
    Balance.innerText = currentBalance + newAmount;
}

// Enter key event handler
document.querySelectorAll('input').forEach(item => {
    item.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("withdraw-btn").click();
            document.getElementById("deposit-btn").click();
        }
    });
});
