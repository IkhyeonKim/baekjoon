const givenNumber = 981235710
let separateNumber = Array.from(givenNumber.toString()).map(Number)

// const separateNumber = Array.from(givenNumber.toString()).map( str => parseInt(str)) <- Same as above

const validate30 = (separateNumber) => {
    let isDivideble = 0
    let zeros = 0

    separateNumber.forEach(element => {
        if(element === 0){
            zeros++
        }
        isDivideble += element
    });

    if(zeros !== 0){
        isDivideble = isDivideble * Math.pow(10, zeros)
    }    

    if(isDivideble % 30 === 0){
        return true
    }else{
        return false
    }
}

const getTheNumber = (separateNumber) => {
    if(validate30(separateNumber)){
        console.log(separateNumber)
        separateNumber.sort( (a,b) => {
            console.log(b-a)
            return b - a
        })
        console.log(separateNumber)
        console.log(parseInt(separateNumber.join('')))
    }else{
        console.log(-1)
    }
}

getTheNumber(separateNumber)
