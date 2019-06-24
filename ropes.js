let weights = [5, 20, 15, 25]
const theNumberOfRopes = 4

const calcMaximumWeight = () => {
    let results = []
    weights.sort((a,b) => {
        return a - b
    })
    
    for (let i = 0; i < weights.length; i++) {
        const element = weights[i];

        results.push(element * (theNumberOfRopes - i))        
    }

    let maximum = 0

    results.forEach( (element) => {
        if(element > maximum) {
            maximum = element
        }
    })

    console.log(maximum)
}

calcMaximumWeight()