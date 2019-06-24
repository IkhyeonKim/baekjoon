// Problem : 1080
// const matrixA = [
//     [1, 0, 1, 1, 0],
//     [0, 0, 0, 0, 1],
//     [1, 1, 1, 1, 1],
//     [0, 0, 0, 0, 0],
//     [0, 0, 1, 1, 1]
// ]

// const matrixB = [
//     [0, 1, 1, 0, 1],
//     [1, 1, 0, 1, 0],
//     [0, 0, 0, 1, 1],
//     [0, 0, 1, 1, 1],
//     [0, 0, 0, 0, 0],
// ]

const matrixA = [
    [0, 0, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 0]
]
const matrixB = [
    [1, 0, 0, 0],
    [1, 0, 1, 1],
    [1, 0, 0, 1]
]

const row = 3
const column = 4

const doXOR = (matrixA, matrixB) => {
    let result = []

    for(let i = 0; i< row; i++){
        let bitwiseResult = []
        for(let j = 0; j< column; j++){
            bitwiseResult.push(matrixA[i][j] ^ matrixB[i][j]) 
        }
        result.push(bitwiseResult)
    }

    return result
}

const checkResult = (matrix) => {
    let theNumberOfOperation = 0

    for(let i = 0; i< row - 2; i++){
        for(let j = 0; j< column -2; j++){
            if(matrix[i][j] === 1){
                matrix = doOperating(matrix, i, j)
                theNumberOfOperation++
            }
        }
        if(matrix[i].includes(1)){
            theNumberOfOperation = -1
            break
        }        
    }

    console.log(theNumberOfOperation)
}

const doOperating = (matrix, row, column) => {
    for(let i = row; i< row + 3; i++){
        for(let j = column; j< column +3; j++){
            if(matrix[i][j] === 1){
                matrix[i][j] = 0
            }else {
                matrix[i][j] = 1
            }
        }
    }
    
    return matrix
}

let matrixResult = doXOR(matrixA, matrixB)
console.log(matrixResult[0].includes(1))
checkResult(matrixResult)
