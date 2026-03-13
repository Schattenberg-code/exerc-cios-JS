function exer6(){

    let letra = " ";

    letra = (prompt("Insira uma letra para verificar se é vogal ou consoante:"));

    if(/[aeiou]/i.test(letra)) {

        console.log("Essa letra é uma vogal.");
        alert("Essa letra é uma vogal.");

    } else if(/[bcdfghjklmnpqrstvwxyz]/i.test(letra)) {

        console.log("Essa letra é uma consoante.");
        alert("Essa letra é uma consoante.")

    } else {

        console.log("Isso não é uma letra.");
        alert("Isso não é uma letra.");
        
    }

}