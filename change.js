
const calcChange = (price) => {
    let sum = 1000 - price //720
    let changes = [500, 100, 50, 10, 5, 1]
    let count = 0
    let index = 0

    do {
        
        if(sum >= changes[index]){
            count++
            sum -= changes[index]
        }else{
            index++
        }
        console.log(index, sum, changes[index])

    } while (sum !== 0)

    console.log(count)
}

calcChange(180)