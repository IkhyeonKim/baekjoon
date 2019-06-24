// 1049

let cutString = 16
let theNumberOfBrand = 3

let firstPrice = [12, 3]
let secondPrice = [15, 4]

let prices = [[17, 3], [16, 4], [32, 5]]

const getMinimumPrice = (cutString) => {
    
    let package 
    let min = 9999

    cutString % 6 !== 0 ? package = Math.floor(cutString / 6) + 1 :  package = Math.floor(cutString / 6)

    for(let i = 0; i< theNumberOfBrand; i++){
        
        if(min > Math.min(prices[i][0] * package, prices[i][1] * cutString)){
            min = Math.min(prices[i][0] * package, prices[i][1] * cutString)
        }
    }

    console.log(min)
}


getMinimumPrice(cutString)