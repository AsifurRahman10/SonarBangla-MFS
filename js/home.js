// add money to main balance
document.getElementById('add-money-btn').addEventListener("click", function(event){
    event.preventDefault(); /* auto submit off */
    const addAmount = document.getElementById('input-add-amount').value;
    const inputPin = document.getElementById('input-pin').value;

    if (inputPin === "1234"){
        const currentBalance = document.getElementById('current-balance').innerText;
        newBalance = Number(currentBalance) + Number(addAmount);
        document.getElementById('current-balance').innerText = newBalance;
    }
    else{
        alert("Add money failed. Please try again");
    }
})

// cash out button 
document.getElementById("cash-out-trigger").addEventListener("click", function(){
    document.getElementById('cash-out-form').classList.remove("hidden");
    document.getElementById('add-money-form').classList.add("hidden");
})

// add money button
document.getElementById("add-money-trigger").addEventListener("click", function(){
    document.getElementById('cash-out-form').classList.add("hidden");
    document.getElementById('add-money-form').classList.remove("hidden");
})