// add money button triggered
document.getElementById('add-money-trigger').addEventListener("click", function(){
    const addMoneyDisplay = hideOther("add-money-form");
})
// cash out Trigger
document.getElementById('cash-out-trigger').addEventListener('click', function(){
    const cashOutDisplay = hideOther("cash-out-form");
})
// transaction history trigger
document.getElementById('transaction-trigger').addEventListener('click', function(){
    const transactionHistoryDisplay = hideOther('transaction-history-form')
})