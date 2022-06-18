function submit() {
    var name = document.getElementById('nameOfBuyer').value
    var email = document.getElementById('emailOfBuyer').value
    var number = document.getElementById('numberOfBuyer').value
    var address = document.getElementById('addressOfBuyer').value
    var pizza = document.getElementById('pizza').value
    var sizeOfPizza;
    var typeOfPizza;

    if(document.getElementById('quickmelt').checked){
        typeOfPizza = 'quickmelt'
    }
    else if(document.getElementById('mozarella').checked) {
        typeOfPizza = 'mozarella'
    }

    if(document.getElementById('9inches').checked){
        sizeOfPizza = '9 Inches'
    }
    else if(document.getElementById('11inches').checked){
        sizeOfPizza = '11 Inches'
    }

    var a = document.getElementById('quickmelt').checked
    var b = document.getElementById('mozarella').checked
    var c = document.getElementById('9inches').checked
    var d = document.getElementById('11inches').checked

    //---------------------------
    if(name == "" || email == "" || number == "" || address == "" || pizza == "" || a == false && b == false || c == false && d == false){
        alert('Missing input, please provide the needed details in ordering.')
    }
    else {
        console.log(name + " " + email + " " + number + " " + address + " " + pizza + " " + typeOfPizza + " " + sizeOfPizza)
        document.getElementById('order-text').innerHTML = "Order received!"
        document.getElementById('order-again-button').style.visibility = "visible"
        document.getElementById('submit-button').style.pointerEvents = "none"
        document.getElementById('submit-button').style.opacity = "50%"
    }
    //---------------------------
}

function orderAgain() {
    document.getElementById('nameOfBuyer').value = ""
    document.getElementById('emailOfBuyer').value = ""
    document.getElementById('numberOfBuyer').value = ""
    document.getElementById('addressOfBuyer').value = ""
    document.getElementById('pizza').value = ""

    document.getElementById('quickmelt').checked = false
    document.getElementById('mozarella').checked = false
    document.getElementById('9inches').checked = false
    document.getElementById('11inches').checked = false

    document.getElementById('order-again-button').style.visibility = "hidden"
    document.getElementById('order-text').innerHTML = ""
    document.getElementById('submit-button').style.pointerEvents = "auto"
    document.getElementById('submit-button').style.opacity = "100%"
}

function myFunction() {
    var x = document.getElementById('nav');
    if(x.style.visibility !== "visible") {
        x.style.visibility = "visible";
    } else {
        x.style.visibility = "hidden";
    }
 }

