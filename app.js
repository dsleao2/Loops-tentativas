alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 2;
console.log(numeroSecreto);
let chute;
// adicionando o número de tentativas feitas pelo usuário até achar o número secreto.
let tentativas = 1;


//enquanto, iremos usar esta função para informar para o site que, enquanto o chute não foi igual ao numero secreto, ira repetir até achar. 
while (chute != numeroSecreto) {
    chute = prompt('Escolha um numero entre 1 e 10');
    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        alert(`Isso ai! Você descubriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        // sempre quando quisermos pegar o valor de uma váriavel atribuir 1 usamos o ++
      tentativas++;

    }

}

