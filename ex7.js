function exer7(){

    //produtos:
    let preco = {
        a: 1.50, b: 2.50, c: 2.50, d: 3.20, e: 3.40, f: 3.00, g: 3.60, h: 4.00, i: 5.00
    };
    
    let escolha;

    while(escolha != 0){
        escolha = prompt("Qual sabor você deseja selecionar?\n(Digite a letra para escolher e '0' para sair)\n\na - Chocolate R$ 1,50\nb - Morango R$ 2,50\nc - Creme R$ 2,50\nd - Manga R$ 3,20\ne - Melancia R$ 3,40\nf - Vanilla Ice R$ 3,00\ng - Céu Azul R$ 3,60\nh - Brownie R$ 4,00\ni - Hawaiano R$ 5,00");

        if(preco[escolha]){
            alert("Esse custa: R$ " +preco[escolha])
            escolha = 0;
        } else {
            alert("Insira um código válido");
        }
    }
}