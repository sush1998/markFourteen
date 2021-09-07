const priceBuyInput=document.querySelector('#priceBuy')
const quantityInput=document.querySelector('#quantity')
const priceCurrentInput=document.querySelector('#priceCurrent')
const btnTellMe=document.querySelector('#btn-tell-me')
const result_msg=document.querySelector('#result_msg')

const section_output=document.querySelector(".section_output")
const outputAbsolute=document.querySelector("#absolute")
const outputPercentage=document.querySelector('#percentage')
btnTellMe.addEventListener('click',(event)=>
{
    event.preventDefault();
    const priceBuy=parseFloat(priceBuyInput.value);
    const quantity=parseInt(quantityInput.value);
    const priceCurrent=parseFloat(priceCurrentInput.value)

    let resultAbsolute=(priceCurrent-priceBuy)*quantity
    console.log(resultAbsolute)
    outputAbsolute.textContent=resultAbsolute

    let resultPercent=(priceCurrent-priceBuy)/(priceBuy/100)
    console.log(resultPercent)
    outputPercentage.textContent=resultPercent.toFixed(2)

    if(resultPercent>0.00)
    {
        result_msg.textContent="Woah!! Your are making a Profit 📈 :D"
        section_output.style.display="block"
    }
    else if(resultPercent<0)
    {
        result_msg.textContent="Opps!! Your are incurring a Loss 📉 :("
        section_output.style.display="block"

    }
    else if(resultPercent===0.00)
    {
        result_msg.textContent="No pain No gain, and no gain no pain ;)"
        section_output.style.display="none"
    }
    

})