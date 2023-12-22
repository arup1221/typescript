interface User {
    readonly dbId: number
    email: string,
    userId: number,
    googleId?: string
    // startTrail: () => string
    startTrail(): string
    getCoupon(couponname: string, value: number): number
}

interface User {
    githubToken: string
    // role: "admin" | "ta"| "lerner"
}

interface Admin extends User{
    role: "admin" | "ta"| "lerner"
}

// const arup : User = {dbId:22, email: "a@g.com",userId:2343,

const arup : Admin = {dbId:22, email: "a@g.com",userId:655,

githubToken: "github",
role: "admin",
startTrail: () => {
    return "hi"
},
getCoupon: (name: "hihh",off: 34) =>{
    return 12
}

}

arup.email = "hs@fds.com"
