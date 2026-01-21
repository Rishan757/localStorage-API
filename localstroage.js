
const countries = ["Bangladesh", "Argentina","Brazil"];
localStorage.setItem("countries",JSON.stringify(countries));

const countriesList = JSON.parse(localStorage.getItem("countries"));
console.log(countriesList);