const theNumberOfPeople = 5
const requiredTime = [3, 1, 4, 3, 2]

const atm = (theNumberOfPeople, requiredTime) => {
    const sortedTime = requiredTime.sort()
    console.log(sortedTime)
    let totalTime = 0
    let currentTime = []
    let time = 0

    for (let index = 0; index < sortedTime.length; index++) {
        const element = sortedTime[index];

        for (let index2 = 0; index2 <= index; index2++) {
            const element = sortedTime[index2]
            time += element
        }

        console.log(time)
        currentTime.push(time)
        time = 0
    }

    console.log(currentTime)
    currentTime.forEach(element => {
        totalTime += element
    });

    console.log(totalTime)
}

atm(theNumberOfPeople, requiredTime)