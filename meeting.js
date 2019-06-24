
const meetingTime = [ 
    {start: 1, end: 4},
    {start: 0, end: 6},
    {start: 5, end: 9},
    {start: 3, end: 5},
    {start: 5, end: 7},
    {start: 3, end: 8},
    {start: 6, end: 10},
    {start: 8, end: 11},
    {start: 8, end: 12},
    {start: 2, end: 13},
    {start: 12, end: 14},
]

// console.log(startMeetingTime)
// console.log(endMeetingTime)
//console.log(meetingTime[0].end)

const calTime = () => {
    let count = 1
    let end = meetingTime[0].end
    
    for(i=1; i< theNumberOfMeetings; i++){
        
        if(end <= meetingTime[i].start){
            count += 1
            end = meetingTime[i].end
        }
    }

    console.log(count)
}

calTime()