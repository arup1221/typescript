type User = {
    readonly _id: string
    name: string
    email: string
    isActive: boolean
    creadcardDetails?: number
}

let myUser: User ={
    _id: "12345",
   name: "h",
   email: "h@h",
   isActive: false 

}


type cardNumber = {
    cardnumber : string
}

type cardDate = {
    cardDate : string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number //combining
}

myUser.email= "hoh@gamil.com"
// myUser._id = "hfds"