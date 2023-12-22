"use strict";
// class User {
//     public email: string
//     private name: string
//     readonly city: string = "jaippur"
//     // #id : number  //private
//     constructor(email: string, name: string){
//         this.email = email;
//         this.name = name
//     }
// }
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this.city = "jaipur";
    }
    return User;
}());
var arup = new User("a@g.com", "arup", "jsfa");
