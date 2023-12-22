const User = {
    name: "arup",
    email: "gope@gmail.com",
    isActive: true
}

function createUser({name: string, isPaid: boolean}){

}
let newUser = {name:"arup",isPaid:false,email:"ar@mis.com"} ///object

createUser(newUser)

function createCourse():{name: string,price: number}{
    return {name:"reactjs",price: 399}
}
export{}