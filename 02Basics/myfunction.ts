function addTwo(num: number): number{
    return num + 2
    // return "hello"
}

function getUpper(val: string){
    return val.toUpperCase()
}
let loginuser = (name: string, email: string, isPaid: boolean= false)=>{} // putting default value in boolean
let myvalue=addTwo(5)
getUpper('34')

loginuser("d","j")


const getHello = (s: string):string =>{
    return ""
}

const heros = ["thor","spiderman","ironman"]
// const heros = [2,4,6]

heros.map((hero):string=>{
    return `hero is ${hero}`
})

function consoleError(errmsg: string): void{
    console.log(errmsg)
}

function  handleError(errmsg: string): never{
    throw new Error(errmsg)
}

export{}