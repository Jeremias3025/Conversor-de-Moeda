const ButtonConvert = document.querySelector(".button-convert")
const SelectCoin = document.querySelector(".select-coin")

function ConvertValues(){

const realconvert = document.querySelector(".realvalue")
const dolarconvert = document.querySelector(".dolarvalue")
const inputValue = document.querySelector("input").value
const DolarToday = 5.6
const EuroToDay = 6.2

if(SelectCoin == "dolar"){
    dolarconvert.innerHTML = new Intl.NumberFormat("en-US",{
        style: "currency", currency: "USD"}).format(inputValue / DolarToday);
}

if(SelectCoin == "euro"){
    dolarconvert.innerHTML = new Intl.NumberFormat("de-DE",{
        style:"currency", currency: "EUR"}).format(inputValue / EuroToDay)

}

realconvert.innerHTML = new Intl.NumberFormat("pt-BR",{
    style: "currency", currency: "BRL"}).format(inputValue);

console.log(ConvertValues)

}

ButtonConvert = document.addEventListener("click" , ConvertValues)