const txtName = document.getElementById("name");
const txtAddress = document.getElementById("address");
const txtAmount = document.getElementById("amount");
const price = document.getElementById("price");
const txtorder = document.getElementById("order");
const filmChoices = document.getElementsByName("film");
const deliveryChoices = document.getElementsByName("delivery");
const theForm = document.getElementById("ticketForm");
const btnCalculate = document.getElementById("calculate");
const txtOutput = document.getElementById("output");


btnCalculate.addEventListener("click", calculate);


for (let i = 0; i < filmChoices.length; i++) {
    filmChoices[i].addEventListener("change",
        calculatefilmCost);
}

for (let i = 0; i < deliveryChoices.length; i++) {
    deliveryChoices[i].addEventListener("change",
         calculatedeliveryCost);
}

function calculatefilmCost() {
    if (this.value == "phantom") {
        filmCost = 79.00;
    }
    else if (this.value == "hamilton") {
        filmCost = 85.00;
    }
    else if (this.value == "lion") {
        filmCost = 67.00;
    }
    else {
        filmCost = 83.00;
    }
    price.innerText = 
        `£${(filmCost + deliveryCost).toFixed(2)}`;
}

function calculatedeliveryCost() {
    if (this.value == "eTicket") {
        deliveryCost += 0;
    }
    else if (this.value == "boxOffice") {
        deliveryCost += 1.50;
    }
    else if (this.value == "post") {
        deliveryCost += 3.99;
    }
    else {
        deliveryCost -= 0.5;
    }
    price.innerText = 
        `£${(filmCost + deliveryCost).toFixed(2)}`;
}

function calculate() {
    if (theForm.checkValidity()) {
        event.preventDefault();
    
        const name = txtName.value;
        const address = txtAddress.value;
        const amount = parseInt(txtAmount.value);
        const film = parseInt(filmCost.value);
        const delivery = parseFloat(deliveryChoices.value);
    
        const total = film;
 
        txtOutput.innerText = `Name: ${name}
        Address: ${address}
        Total cost: £${total.toFixed(2)}`;
        }
    }


let filmCost = 0;
let deliveryCost = 0;

price.innerText = 
     `£${(filmCost + deliveryCost).toFixed(2)}`;

