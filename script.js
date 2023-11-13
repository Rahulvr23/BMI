function calculate() {
    var height=document.getElementById("height").value
    var weight=document.getElementById("weight").value
     var height=(height/100)**2
     var bmi=weight/(height)
     result.value=bmi
     if(bmi<18.5){
        
        const para=document.getElementById("conclusion")
        para.textContent="under weight"
        para.style.color="orange"
     }
else if(bmi>18.5&&bmi<24.9){
    
    const para=document.getElementById("conclusion")
    para.textContent="healthy weight"
    para.style.color="green"
}
else if(bmi>25.0&&bmi<29.9){
    
    const para=document.getElementById("conclusion")
    para.textContent="over weight"
    para.style.color="orange"
}
else{
    
    const para=document.getElementById("conclusion")
    para.textContent="obese range"
    para.style.color="red"
}
}
function clearitem() {

    height.value=""
    weight.value=""
    result.value=""
    para.textContent=" "
    
  
}

