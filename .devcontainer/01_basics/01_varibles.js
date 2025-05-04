const num = 1234
let emailId = "dibvyam@gmail.com"
var password = "12345"
City = "Pune"
var number = 1
// prefer not to use var
// bcz of  issue in block scope and functional scope

let area;
// num = 789
console.log(num);
// to print all values in table format
console.table([num, emailId, password, City, area, number])
