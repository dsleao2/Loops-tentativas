alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 2;
console.log(numeroSecreto);
let chute = prompt ('Escolha um numero entre 1 e 10');

// se chute for igual ao número secreto
if ( chute == numeroSecreto){
    alert(`Isso ai! Você descubriu o número secreto ${numeroSecreto}`)
} else{
    if (chute > numeroSecreto){
        alert(`O número secreto é menor que ${chute}`);
    } else {
        alert(`O número secreto é maior que ${chute}`);
    }

    }