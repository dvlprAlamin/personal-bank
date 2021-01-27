// Login button event handler
document.getElementById('login-btn').addEventListener('click', function(){
    document.getElementById('login-area').style.display = "none";
    document.getElementById('transaction-area').style.display = "block";
});
// Deposit button event handler
document.getElementById('deposit-btn').addEventListener('click', function(){
    const newAmount = parseFloat(document.getElementById('deposit-amount').value);
    // Add amount to deposit
    addAmount('deposit',newAmount);
    // Add amount to balance
    addAmount('balance',newAmount);
    document.getElementById('deposit-amount').value = '';
    validateForm('deposit-amount');
});

// Withdraw button event handler
document.getElementById('withdraw-btn').addEventListener('click', function(){
    const newAmount = parseFloat(document.getElementById('withdraw-amount').value);
    // Add amount to withdraw
    addAmount('withdraw',newAmount);
    document.getElementById('withdraw-amount').value = '';
    const oldBalance = parseFloat(document.getElementById('balance').innerText);
    if(isNaN(newAmount)){
        document.getElementById('balance').innerText = oldBalance;
        alert('Enter valid amount');
    }
    else{
        document.getElementById('balance').innerText = oldBalance - newAmount;
    }
    if(newAmount > oldBalance || newAmount <= 0){
        document.getElementById('balance').innerText = oldBalance;
        alert('Enter valid amount');
    }
})
function addAmount(id, newAmount) {
    const oldAmount = parseFloat(document.getElementById(id).innerText);
    document.getElementById(id).innerText = oldAmount + newAmount;

    if(isNaN(newAmount) || newAmount <= 0){
        document.getElementById(id).innerText = oldAmount;
        alert('Enter valid amount');
    }
    else{
        document.getElementById(id).innerText = oldAmount + newAmount;
    }
};