// Problem number: 1541
let calculation = Array.from('55-50+405')
// console.log(calculation)

const preProcessing = (stringArr) => { // to split over 9
    let newArr = []

    for(let i =0; i< stringArr.length - 1; i++){
        if((stringArr[i] !== '+' && stringArr[i] !== '-') && (stringArr[i+1] !== '+' && stringArr[i+1] !== '-')){
            let j = i + 1
            while ((stringArr[j] !== '+' && stringArr[j] !== '-') && (j < stringArr.length)) {
                stringArr[i] += stringArr[j]    
                j++
            }
            newArr.push( stringArr[i] )
            i = j - 1
            continue
        }
        newArr.push( stringArr[i] )
    }

    console.log(newArr)

    return newArr
}

calculation = preProcessing(calculation)

const calcMinimum = (calculation) => {
    let sum = parseInt(calculation[0])
    let temp = 0
    let parentheses = false

    for(let i = 1; i< calculation.length-1; i += 2){
        if(calculation[i] === '+' && parentheses === false){ // 
            sum += parseInt(calculation[i+1])
        }else if(calculation[i] === '-' && parentheses === false){
            temp += parseInt(calculation[i+1])
            parentheses = true
        }else if(calculation[i] === '+' && parentheses === true){
            temp += parseInt(calculation[i+1])
        }else if(calculation[i] === '-' && parentheses === true){
            temp += parseInt(calculation[i+1])
            //Don't need to close parentheses 
        }
    }

    console.log(sum, temp)
    sum -= temp

    return sum
}

console.log(calcMinimum(calculation))