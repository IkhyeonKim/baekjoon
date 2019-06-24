const girls = 12
const boys = 18
let requireIntern = 7
let totalTeam = 0
let restPeople = [girls, boys]

const getTeam = (restPeople, requireIntern, totalTeam) => {

    for (let index = 0; index < boys; index++) {
        if(restPeople[0] <= 0 || restPeople[1] <= 0){
            break;
        }

        restPeople[0] -= 2
        restPeople[1] -= 1

        totalTeam++
    }

    totalTeam = subIntern(restPeople, requireIntern, totalTeam)

    console.log(`Total: ${totalTeam}`)
    
}

const subIntern = (restPeople, requireIntern, totalTeam) => {
    
    console.log(restPeople, requireIntern, totalTeam)
    let restTotal = restPeople[0] + restPeople[1]
    
    console.log(restTotal)

    if(requireIntern > restTotal){ // Break the teams
        requireIntern -= restTotal
        console.log(requireIntern)

        let quotient = Math.floor(requireIntern / 3)
        let remainder = requireIntern % 3

        totalTeam -= quotient
        if(remainder !== 0){
            totalTeam--
        }
    }

    return totalTeam
}

getTeam(restPeople, requireIntern, totalTeam)