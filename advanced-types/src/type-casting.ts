const paragraph = document.querySelector('p');

//pode usar essas duas formas
// const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;
const userInputElement = document.getElementById('user-input')! as HTMLInputElement;

//quando atribuimos diretamente um valor a um elemento que não está especificado, temos q primeiramente colocar o ! apos a declaraçao dizendo q o valor não sera null
//e tem a necessidade de especificar para o typescript que aquele document é referente a um InputText, pois ele nao tem como atribuir se nao souber o que é!
userInputElement.value = 'Hi';

//function overloads 
type Combinable1 = string | number;
type Numeric1 = number | boolean;

type Universal1 = Combinable & Numeric;

//vc coloca acima da main function, para dar a possibilidade de ter parametros e retorno de outro tipo
function add(n1:number, n2:number, n3?:number): number; //se tiver mais parametros, ou menos, nas funçoes que tiver mais tem q declarar como opcionais
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: Combinable, b: Combinable) {
    if(typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}

const result = add('Davi', 'Pinheiro')

//optional chaining serve para quando a gente nao sabe se vão vir dados do backend, a gente coloca interrogaçao 
// console.log(fetchedUser?.job?.title);

//quando um dado pego da API pode vir null ou undefined, pode-se usar o operador ?? pra dar um valor default
const userInput = undefined;
const storedData = userInput ?? 'DEFAULT';
