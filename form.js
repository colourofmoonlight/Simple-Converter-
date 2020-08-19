console.log("Hi!")

let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");

let AUD = 2.68;
let USD = 3.69;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amountValue = amountElement.value;
    let currency = currencyElement.value;
    let finalResult;

    switch(currency) {
        case "AUD":
            finalResult = amountValue / AUD;
            break;
        
        case "USD":
            finalResult = amountValue / USD;
            break;
    }

    resultElement.innerText = `${amountValue} PLN = ${finalResult.toFixed(2)} ${currency}`;
});