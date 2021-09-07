const priceBuyInput=document.querySelector('#priceBuy')
const quantityInput=document.querySelector('#quantity')
const priceCurrentInput=document.querySelector('#priceCurrent')
const btnTellMe=document.querySelector('#btn-tell-me')

const outputAbsolute=document.querySelector("#absolute")
const outputPercentage=document.querySelector('#percentage')
btnTellMe.addEventListener('click',()=>
{
    const priceBuy=parseFloat(priceBuyInput.value);
    const quantity=parseInt(quantityInput.value);
    const priceCurrent=parseFloat(priceCurrentInput.value)

    let resultAbsolute=(priceCurrent-priceBuy)*quantity
    console.log(resultAbsolute)
    outputAbsolute.textContent=resultAbsolute

    let resultPercent=(priceCurrent-priceBuy)/(priceBuy/100)
    console.log(resultPercent)
    outputPercentage.textContent=resultPercent.toFixed(2)
})