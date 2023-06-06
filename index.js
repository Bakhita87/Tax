function calculate (exclusivePrice,taxRate){
    let tax = exclusivePrice * (taxRate/100)
    let inclusivePrice =exclusivePrice - tax
    return  inclusivePrice
}

let answer = calculate(30,9)

console.log(answer);