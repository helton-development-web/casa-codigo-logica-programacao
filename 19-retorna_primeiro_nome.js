let userName = getFirstName("Carlos-Amoedo-Sampaio-Filho", "-");
console.log("Seja bem vindo " + userName);

userName = getFirstName("Felipe Silva Han Solo"," ");
console.log("Seja bem vindo" + userName);

function getFirstName(name,splitChar){
    let firstName = name.split(splitchar)[0];
    return firstName;
}
