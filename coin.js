const theNumberOfCoins = 10
const total = 4790
const coinOrder = [1, 5, 10, 50, 100, 500, 1000, 5000, 10000, 50000]

const calculateCoins = (theNumberOfCoins, total) => {
    let totalCoins = 0
    if(theNumberOfCoins > 11 || theNumberOfCoins < 1){
        return console.log('Put appropriate numbers')
    }

    let coins = coinOrder.map( element => element = 0 )

    for (let index = coins.length - 1; index > 0; index--) {
        const element = coinOrder[index]
        const element2 = coinOrder[index-1]

        if(total < element && total > element2 ){
            coins[index-1] = Math.floor(total / element2)
            total %= element2
        }
    }

    coins.forEach( (element) => {
        totalCoins += element
    })
    console.log(coins)
    console.log(totalCoins)
}

calculateCoins(theNumberOfCoins, total)