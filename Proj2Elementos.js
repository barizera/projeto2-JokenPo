const prompt = require('prompt-sync')();
console.clear();

//Array com os dados:
const elementos = ['agua', 'fogo', 'planta'];

//Escolha do Usuário:
let elementoUser;

//Escolha do PC:
let elementoPc;

//Variáveis das vitórias
let vitoriaUser = 0;
let vitoriaPc = 0;

console.log(`   ***** Batalha dos elementos *****\n`)
console.log(`\tSe você já jogou Pokemon, vai ser fácil jogar a Batalha dos elementos. Nosso 
sucesso está definido pela vantagem de um elemento sobre o outro, temos 3(três) elementos
que possuem vantagens um sobre o outro (FOGO > PLANTA > ÁGUA > FOGO). Assim, você escolhe 
1 Elemento e o Pêcê (nosso grande amigo Computador) escolhe outro aleatório. Quem vencer na
rodada soma 01 ponto e ao final quem tiver mais pontos é nosso Campeão da Batalha dos Elementos!`)

let player = prompt("Olá, qual seu nome?: ");

do {
    let vitoriaUser = 0;
    let vitoriaPc = 0;

    // // o Do while começa aqui, porque é onde o game reinicia. 
    let quantidaderodadas = +prompt(`Bem vindo, ${player}!! Quantas rodadas deseja jogar?`)
    
    // Function isNaN(), entrou no código para que não deixasse o usuário dados que não sejam números.
    while (isNaN(quantidaderodadas) || quantidaderodadas === 0) {
    console.log("Digite um número, e que ele seja maior que 0(Zero)!")
    
    quantidaderodadas = +prompt(`Bem vindo, ${player}!! Quantas rodadas deseja jogar?`)
    }

        // For gerando uma repetição.
        for ( let rodadas = 0; rodadas < quantidaderodadas; rodadas++) {
            do { 
                elementoUser = prompt("Qual o elemento você escolhe para essa rodada?:(Água/Fogo/Planta) ").toLocaleLowerCase();
            } while (elementoUser != "agua" && elementoUser != "fogo" && elementoUser != "planta");
            console.log(`\nO ${player} escolheu: ${elementoUser}`);
            
            elementoPc = elementos[Math.floor(Math.random()*elementos.length)];
            console.log(`O Pêcê escolheu: ${elementoPc}`)
                        
                //if para verificar o resultado da rodada, adicionar ao placar.
                if ((elementoUser === elementos[0] && elementoPc === elementos[1]) || (elementoUser === elementos[1] && elementoPc === elementos[2]) || (elementoUser === elementos[2] && elementoPc === elementos[0]) ){
                    console.log(`\n${elementoUser} ganha do ${elementoPc}, vitória do ${player}!`);
                    vitoriaUser++
                    console.log(`O Placar está: ${player} ${vitoriaUser} x Pêcê ${vitoriaPc}!\n`)
                } 
                else if ((elementoUser === elementos[0] && elementoPc === elementos[2]) || (elementoUser === elementos[1] && elementoPc === elementos[0]) ||(elementoUser === elementos[2] && elementoPc === elementos[1])) {
                    console.log(`\n${elementoPc} ganha da ${elementoUser}, vitória do Pêcê!`)
                    vitoriaPc++
                    console.log(`O Placar está: ${player} ${vitoriaUser} x Pêcê ${vitoriaPc}!\n`)
                }

                else {
                    console.log(`\nOpa, com elementos iguais não há vencedor na rodada!`);
                    console.log(`O Placar está: ${player} ${vitoriaUser} x Pêcê ${vitoriaPc}!\n`)
                }
        }  
    


  //if para informar quem venceu.
    if(vitoriaUser > vitoriaPc) {
        console.log(`\nO placar foi de ${player} ${vitoriaUser} O ${player}, superou o Pêcê e se consagrou nosso Campeão dos Elementos!`)
    } 
    else if (vitoriaUser < vitoriaPc) {
        console.log(`\nOpa, ${player}, dessa vez o Pêcê te superou e se consagrou o Campeão dos Elementos!`)
    } 
    else {
        console.log(`\nA disputa foi acirrada e vocês chegaram a um empate!`)
    }
        // do while para poder após o resultado fazer a pergunta ao player se ele deseja recomeçar o game.
        do { 
        jogarNovamente = prompt("Deseja batalhar novamente? Sim/Não: ").toLocaleLowerCase();
        } while (jogarNovamente != "sim" && jogarNovamente != "nao") 
        console.clear();
        
}  while (jogarNovamente === "sim");   
// encerramento do "Do While" Na linha acima, ele faz a verificação que vem do prompt. sendo a resposta "sim", ele reinicia, indo para a linha 26 (inicio do "do while").