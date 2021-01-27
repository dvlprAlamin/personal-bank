document.getElementById('login-btn').addEventListener('click', 
function(){
    document.getElementById('login-area').style.display = "none";
    document.getElementById('transaction-area').style.display = "block";
});
 
document.getElementById('deposit-btn').addEventListener('click', function(){
    const newAmount = parseFloat(document.getElementById('deposit-amount').value);
    // Add amount to deposit
    addAmount('deposit',newAmount);
    // Add amount to balance
    addAmount('balance',newAmount);
    document.getElementById('deposit-amount').value = '';
});


document.getElementById('withdraw-btn').addEventListener('click', function(){
    const newAmount = parseFloat(document.getElementById('withdraw-amount').value);
    // Add amount to withdraw
    addAmount('withdraw',newAmount);
    document.getElementById('withdraw-amount').value = '';

    const oldBalance = parseFloat(document.getElementById('balance').innerText);
    document.getElementById('balance').innerText = oldBalance - newAmount;
})
function addAmount(id, newAmount) {
    const oldAmount = parseFloat(document.getElementById(id).innerText);
    document.getElementById(id).innerText = oldAmount + newAmount;
};
function getInputNumber() {
    
} 
