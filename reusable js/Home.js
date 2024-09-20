// add money to main balance
document.getElementById('add-money-btn').addEventListener("click", function (event) {
    event.preventDefault();
    const addAmount = getValueFromInput("input-add-amount");
    const addMoneyPin = getValueFromInput("input-pin");
    const totalAmount = getTextFromElement("current-balance");
    if (addMoneyPin === 1234) {
        const updatedBalance = addAmount + totalAmount;
        document.getElementById('current-balance').innerText = updatedBalance;

        // adding to transaction history
        const div = document.createElement('div');
        div.classList.add("bg-green-600", "flex", "mb-2", "p-3")
        div.innerHTML = `
        <h3 class ="text-xl font-bold text-white">Money Added</h3>
        <p class="text-white font-bold">${addAmount} added, Current Balance ${updatedBalance}</P>
        `
        document.getElementById('history-container').appendChild(div);
    }
    else {
        alert('Money not added. Please try again')
    }
})

// cash out and update it into main balance 

document.getElementById('cash-out-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const cashOutAmount = getValueFromInput('input-cash-out-amount');
    const addMoneyPin = getValueFromInput('cash-out-input-pin');
    const totalAmount = getTextFromElement("current-balance");
    if (addMoneyPin === 1234) {
        const updatedBalance = totalAmount - cashOutAmount;
        document.getElementById('current-balance').innerText = updatedBalance;
        // cash out transaction history
        const div = document.createElement('div');
        div.classList.add("bg-red-600", "flex", "mb-2", "p-3")
        div.innerHTML = `
        <h3 class ="text-xl font-bold text-white">Money Added</h3>
        <p class="text-white font-bold">${cashOutAmount} added, Current Balance ${updatedBalance}</P>
        `
        document.getElementById('history-container').appendChild(div);

    }
    else {
        alert('Cash out Failed. Please try again')
    }
})

// transfer amount from main balance
document.getElementById('transfer-button').addEventListener('click', function (event) {
    event.preventDefault();
    const inputTransferAmount = getValueFromInput('input-transfer-amount');
    const inputTransferPin = getValueFromInput('transfer-amount-input-pin');
    const totalAmount = getTextFromElement("current-balance");
    if (inputTransferPin === 1234) {
        const availableBalance = totalAmount - inputTransferAmount;
        document.getElementById('current-balance').innerText = availableBalance;
    }
    else{
        alert('Transfer process failed. Please try again');
    }

})

