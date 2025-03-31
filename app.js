alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 2;
console.log(numeroSecreto);
let chute

//enquanto, iremos usar esta função para informar para o site que, enquanto o chute não foi igual ao numero secreto, ira repetir até achar. 
while (chute != numeroSecreto) {
    chute = prompt('Escolha um numero entre 1 e 10');
    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        alert(`Isso ai! Você descubriu o número secreto ${numeroSecreto}`)
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }


    }

}

// Da forma acima, quando o usuário chuta um número e erra, o programa finaliza por ali.
//Pois o código é lido de cima para baixo, como não esta sendo continuo, não esta em looping, o programa finaliza. 

