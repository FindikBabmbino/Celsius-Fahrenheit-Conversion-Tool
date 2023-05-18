
let valueToConvert = 0;

const SUBMIT_BTN = document.querySelector("#conversion-submitbtn");

const F_RADIO = document.querySelector("#fahrenheit");

const C_RADIO = document.querySelector("#celsius");


SUBMIT_BTN.addEventListener("click", function(){

    let splitTextValue = document.querySelector("#text-value").value.split("°");

    valueToConvert = splitTextValue[0];
    valueToConvert = Number(valueToConvert);
    
    if(F_RADIO.checked){
        let fahrenheitValue = (valueToConvert * 1.8)+ 32;
        document.querySelector("#text-value").value = fahrenheitValue + "°F";
    }
    else if(C_RADIO.checked){
        let celsiusValue = (valueToConvert - 32) / 1.8;
        document.querySelector("#text-value").value = celsiusValue + "°C";
    }
})
