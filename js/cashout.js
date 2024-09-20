document.getElementById('cash-out-btn').addEventListener("click", function(event){
    event.preventDefault();
    const cashOutAmount = document.getElementById('input-cash-out-amount').value;
    const cashOutPIN = document.getElementById('cash-out-input-pin').value;
    if (cashOutPIN === "1234") {
        const currentAmount = document.getElementById('current-balance').innerText;
        const remainingBalance = Number(currentAmount) - Number(cashOutAmount);
        document.getElementById('current-balance').innerText = remainingBalance;
    }
    else{
        alert("Failed to cash out, Please try again")
    }
})