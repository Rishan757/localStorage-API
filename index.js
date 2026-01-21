const data = require("./friends_data.json");
// console.log(data);

// console.log(data.friends[0].Age);

// data.friends[1].Name = "Alamin";
// console.log(data.friends[1].Name);

delete data.friends[1].Name;
console.log(data);