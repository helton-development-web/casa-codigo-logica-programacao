let userName = getFirstName("Carlos Amoedo Sampaio Filho");

console.log("Seja bem vindo " + userName);

function getFirstName(name){
    let firstName = name.split(" ")[0];
    return firstName;
}
