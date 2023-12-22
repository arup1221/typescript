let score: number | string = 33
score = 44
score = "55"

type User = {
    name: string
    id: number
}

type Admin = {
    username: string
    id: number
}

let arup : User | Admin = {name: "arup", id: 343}

arup = {username: "sfdf", id: 23}


// function getDbId(id: number | string){
//   // making some API calls
//   console.log(`DB id is: ${id}`)
// }

getDbId(3)
getDbId("e4")

function getDbId(id: number | string){
    if(typeof id === "string"){
        id.toLowerCase()
    }
    }

    const data: number[] = [1,2,3]
    const data2 : string[] = ["1","2","3"]
    const data3: string[]| number[] =["2","4","5"]  //either all the numbers or strings not mixmatch
    const data4: (string|number|boolean)[] = [3,4,"54",true]

    let seatAllotment: "aisle"|"middle"|"window"

    seatAllotment = "aisle"
    // seatAllotment = "crew"
