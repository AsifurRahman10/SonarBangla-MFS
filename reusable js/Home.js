// add money to main balance
document.getElementById('add-money-btn').addEventListener("click", function (event) {
    event.preventDefault();
    const addAmount = getValueFromInput("input-add-amount");
    const addMoneyPin = getValueFromInput("input-pin");
    const totalAmount = getTextFromElement("current-balance");
    if (addMoneyPin === 1234) {
        const updatedBalance = addAmount + totalAmount;
        document.getElementById('current-balance').innerText = updatedBalance;
    }
    else{
        alert('Money not added. Please try again')
    }
})

// cash out and update it into main balance 

document.getElementById('cash-out-btn').addEventListener('click', function(event){
    event.preventDefault();
    const cashOutAmount = getValueFromInput('input-cash-out-amount');
    const addMoneyPin = getValueFromInput('cash-out-input-pin');
    const totalAmount = getTextFromElement("current-balance");
    if(addMoneyPin === 1234){
        const updatedBalance = totalAmount - cashOutAmount;
        document.getElementById('current-balance').innerText = updatedBalance;
    }
})