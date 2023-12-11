/*
## Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 6.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"
*/

let heroi = ["John", 9868]; // valores podem ser alterados
let nivel;

if( heroi[1] < 1000) { 
    nivel = "Ferro";
    console.log("O Herói de nome "+ heroi[0] + " está no nível de " + nivel);
}

else if( heroi[1] >= 1001 && heroi[1] <= 2000) { 
    nivel = "Bronze";
    console.log("O Herói de nome "+ heroi[0] + " está no nível de " + nivel);
}

else if( heroi[1] >= 2001 && heroi[1] <= 5000) { 
    nivel = "Prata";
    console.log("O Herói de nome "+ heroi[0] + " está no nível de " + nivel);
}

else if( heroi[1] >= 6001 && heroi[1] <= 7000) { 
    nivel = "Ouro";
    console.log("O Herói de nome "+ heroi[0] + " está no nível de " + nivel);
}

else if( heroi[1] >= 7001 && heroi[1] <= 8000) {
    nivel = "Platina";
    console.log("O Herói de nome "+ heroi[0] + " está no nível de " + nivel);
}

else if( heroi[1] >= 8001 && heroi[1] <= 9000) { 
    nivel = "Ascendente";
    console.log("O Herói de nome "+ heroi[0] + " está no nível de " + nivel);
}

else if( heroi[1] >= 9001 && heroi[1] <= 10000) { 
    nivel = "Imortal";
    console.log("O Herói de nome "+ heroi[0] + " está no nível de " + nivel);
}

else if (heroi[1] >= 10001) {
    nivel = "Radiante";
    console.log("O Herói de nome "+ heroi[0] + " está no nível de " + nivel);
}
