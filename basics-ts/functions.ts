//vc pode colocar o tipo do retorno colocando :string ou outro tipo apos o :
// é uma boa prática nao especificar o tipo do retorno e deixar o typescript inferir o tipo
function add(n1: number, n2: number) {
    return n1 + n2;
}

//typescript suporta tipo void
function printResult(num: number): void {
    console.log('Result:' + num);
}
//void retorna undefined, e undefined é um tipo do typescript
let someValue: undefined;
//uma funcao declarada como undefined, precisa ter um retorno, void nao

//tem como declarar uma variável com o tipo Function, assim ela só poderá armazenar funçoes
let combinedValues: () => number;
//isso significa que cumbinedValues recebe qualquer funçao que nao receba parametros e que retorne number


let combineValues: (a: number, b: number) => number;
//aqui mostra que combineValues recebe uma funçao que receba 2 parametros number e retorne um number
combineValues = add;

combineValues(5, 8);

//callback functions
//passa a funcao de callback nos parametros da funcao
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
}
//é utilizado pq dá suporte do typescript na declaraçao, retorno, etc
addAndHandle(10, 20, (result) => {
    console.log(result)
});

printResult(add(12, 5));