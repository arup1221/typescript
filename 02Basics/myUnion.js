var score = 33;
score = 44;
score = "55";
var arup = { name: "arup", id: 343 };
arup = { username: "sfdf", id: 23 };
// function getDbId(id: number | string){
//   // making some API calls
//   console.log(`DB id is: ${id}`)
// }
getDbId(3);
getDbId("e4");
function getDbId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
}
var data = [1, 2, 3];
var data2 = ["1", "2", "3"];
var data3 = ["2", "4", "5"]; //either all the numbers or strings not mixmatch
var data4 = [3, 4, "54", true];
var seatAllotment;
seatAllotment = "aisle";
// seatAllotment = "crew"
