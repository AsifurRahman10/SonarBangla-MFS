// getting value from input field
function getValueFromInput(id){
    const inputValue = document.getElementById(id).value;
    const inputValueToNumber = Number(inputValue);
    return inputValueToNumber;
}

// getting text from element 
function getTextFromElement(id){
    const availableBalance = document.getElementById(id).innerText;
    const availableBalanceToNumber = Number(availableBalance);
    return availableBalanceToNumber;
}

// display different button
function hideOther(id){
    const addMoneyContainer = document.getElementById('add-money-form').classList.add("hidden");
    const cashOuContainer = document.getElementById('cash-out-form').classList.add("hidden");
    const transactionContainer = document.getElementById('transaction-history-form').classList.add("hidden");
    const transferMoneyContainer = document.getElementById('transfer-money-form').classList.add("hidden");
    document.getElementById(id).classList.remove("hidden");
}

