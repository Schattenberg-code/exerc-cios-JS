function exer4(){

    let vetor = [];
    let aux;
    let textoembaralha = "";
    let texto = "";

    for(let i = 0; i<4; i++){
        vetor[i] = parseInt(prompt("Insira um numero para o vetor"));
        textoembaralha += (vetor[i]);
        console.log(vetor[i]);
    }

        alert("os numeros escolhidos foram: " + textoembaralha);

    for(let i = 0; i<4; i++){
        if(vetor[i] < vetor[i+1]){
            aux = vetor[i];
            vetor[i] = vetor[i=1]
            vetor[i+1] = aux;
            texto += (vetor[i]);
        } else {
            texto += (vetor[i]);
        }
    }

    alert("os numeros organizados ficaram: " + texto);

}