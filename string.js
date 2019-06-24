// Problem number: 1120
// We don't need to think about printing the array or something else cuz, we can add alphabets either at the front or at the end.

const stringA = Array.from('bc')
const stringB = Array.from('acbdce')
let sum, min = 0

console.log(stringA)

for(let i = 0; i< stringB.length - stringA.length + 1; i++){
    sum = 0 // Get the sum each length.

    for(let j = i; j< stringA.length + i; j++) {
        
        if(stringA[j - i] !== stringB[j]){
            sum++
        }   
    }
    
    if(i === 0){
        min = sum
    }else{
        min = min > sum ? sum : min
    }
    
}

console.log(min)