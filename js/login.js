// 
document.getElementById('btn-login').addEventListener("click",function(event){
    event.preventDefault(); /* for stopping the default behave of form */
    // getting the user info
    const userPhone = document.getElementById('user-phone').value;
    const userPin = document.getElementById('user-pin').value;
    // validation
    if (userPhone === "12345" && userPin === "1234") {
        window.location.href = './home.html'
    }
    else{
        alert("Incorrect Phone number or password")
    }

    
})