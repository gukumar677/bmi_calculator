
let height = document.getElementById('height')
let weight = document.getElementById('weight')

function bmiCalculator(){    
    
    // 1 cm = 0.01 m
    let cmToMeter = height.value * 0.01 
    // m square
    let bmiMeter = cmToMeter * cmToMeter
    // bmi formula
    let bmiResult = (weight.value/bmiMeter).toFixed(2) 
    let bmivalue = document.getElementById('bmiValue')
    let category = document.getElementById('category')
    let riskLevel = document.getElementById('riskLevel')
    let quote = document.getElementById('quote')
    quote.innerText = "Be Healthy & Wealthy "

    if (bmiResult <15){
        bmivalue.innerText = "BMI value: " + bmiResult
        category.innerText = "Category: Very severely underweight"
        riskLevel.innerText = "Risk level: " + "Moderate"
    }
    else if (bmiResult >= 15 && bmiResult <= 15.90){
        bmivalue.innerText = "BMI value: " + bmiResult
        category.innerText = "Category: Severely underweight"
        riskLevel.innerText = "Risk level: " + "Moderate"
    }

    else if (bmiResult >= 16 && bmiResult <= 18.04){
        bmivalue.innerText = "BMI value: " + bmiResult
        category.innerText = "Category: Underweight"
        riskLevel.innerText = "Risk level: " + "Moderate"
    }

    else if (bmiResult >= 18.50 && bmiResult <= 24.90){
        bmivalue.innerText = "BMI value: " + bmiResult
        category.innerText = "Category: Normal (healthy)👌"
        riskLevel.innerText = "Risk level: " + "Very Low"
    }

    else if (bmiResult >= 25 && bmiResult <= 29.90){
        bmivalue.innerText = "BMI value: " + bmiResult
        category.innerText = "Category: OverWeight"
        riskLevel.innerText = "Risk level: " + "Low"
    }
    else if (bmiResult >= 30 && bmiResult <= 34.90){
        bmivalue.innerText = "BMI value: " + bmiResult
        category.innerText = "Category: Moderately obese"
        riskLevel.innerText = "Risk level: " + "Moderate"
    }

    else if (bmiResult >= 35 && bmiResult <= 39.90){
        bmivalue.innerText = "BMI value: " + bmiResult
        category.innerText = "Category: Severely obese"
        riskLevel.innerText = "Risk level: " + "High"
    }
    else {
        bmivalue.innerText = "BMI value: " + bmiResult
        category.innerText = "Category: Very severely obese"
        riskLevel.innerText = "Risk level: " + "Very High"
    }

}

function reset(){
    console.log("reset  called")
    height.value = ''
    weight.value = ''
}