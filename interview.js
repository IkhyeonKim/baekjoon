// Problem number: 1946

const testCase = 2
const interviewee = [5, 7]

let firstTest = [
    [3, 2], [1, 4], [4, 1], [2, 3], [5, 5]
]

let secondTest = [
    [3, 6], [7, 3], [4, 2], [1, 4], [5, 7], [2, 5], [6, 1]
]

firstTest.sort( (a,b) => a[0] - b[0])
secondTest.sort( (a,b) => a[0] - b[0])

let tests = [firstTest, secondTest]

const getPass = (test) => {

    let result = 1
    let compare = test[0][1]

    for(let i = 1; i< test.length ; i++){
        if(test[i][1] < compare){
            compare = test[i][1]
            result++
        }
    }

    console.log(result)
}

tests.forEach(element => {
    getPass(element)
});