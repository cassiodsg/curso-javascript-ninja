/*
Crie um array com 5 items (tipos variados).
*/
var myArr = [1, true, null, "Cassio", function teste (x){ return x;}]

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem(add){
    myArr.push(add);
    return myArr;
}

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
console.log(addItem(['a', 0, {carro:"BMW", cor: "Branco"}]));

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log("O segundo elemento do segundo array é "+ myArr[5][1] +".")

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log("O primeiro array tem " + myArr.length + " itens.")

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log("O segundo array tem " + myArr[5].length + " itens.")

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
var pares = 10;
while(pares <= 20 ){
    pares % 2 === 0 ? console.log( 'Números pares entre 10 e 20: '+ pares +'' ): '';
    ++pares
}
 
// ?

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
var impares = 10;
while(impares <= 20 ){
    impares % 2 === 1 ? console.log( 'Números ímpares entre 10 e 20: '+ impares +'' ): '';
    ++impares
}


/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
for(var par = 100; par <= 120; par++){
    par % 2 === 0 ? console.log( 'Números pares entre 100 e 120: ' + par + '' ): '';
}

for(var impar = 111; impar <= 125; impar++){
    impar % 2 === 1 ? console.log( 'Números ímpares entre 111 e 125: ' + impar + '' ): '';
}
