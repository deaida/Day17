// Lodash
const _ = require('lodash');

// Only change code below this line
// users nested array with four objects start here
var users = [
    {firstName: [John, Jane, Jim, Kate]},
    {lastName: [Doe, Doe, Carrey, Winslet]},
    {age: [24, 5, 54, 40]},
    {gender: [male, female, male, female]}
];
// users nested array with four object ends here

// getUsers function- list of users starts here
function getUsers(){
    var output= "";
    for(i=0; i<users.length; i++){
        console.log(users)
        return output;
    }
    
}
// getsUsers function - list of users ends here
function findUser(lastName, gender){
    try{ var user
        var iFindUser

    }catch (error){
        return
        console.log();
    }
}
getUsers();
findUser();
module.exports = findUser;