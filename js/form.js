console.log("Hi!")

{

    const calculateResult = (amountValue, currency) => {
        const AUD = 2.68;
        const USD = 3.69;
    
        switch(currency) {
            case "AUD":
                return amountValue / AUD;
         
            case "USD":
                return amountValue / USD;
        }
    }; 

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");
        const resultElement = document.querySelector(".js-result");


        const amountValue = amountElement.value;
        const currency = currencyElement.value;

        const finalResult = calculateResult(amountValue, currency);

        resultElement.innerText = `${amountValue} PLN = ${finalResult.toFixed(2)} ${currency}`;
    };


    const init = () => {
        const formElement = document.querySelector(".js-form");


        formElement.addEventListener("submit", onFormSubmit);

    };

    init();

}