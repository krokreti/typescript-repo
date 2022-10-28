// Code goes here!

const add = (a: number, b: number) => {
    return a + b;
}

//no parenteses vai os parametros da funcao
// se so tiver uma expressao, a arrow function pode vir assim:

const adicionar = (a: number, b: number) => a + b; //dessa forma o return fica implicito
//quando so tem uma linha, pode retornar o valor sem as chaves

const printOutput = (output: string | number) => console.log(output);

//quando nao se passa parametros vc é obrigado a colocar os parenteses vazios ()
const button = document.querySelector('button');
if (button)  {
    button.addEventListener('click', event => console.log(event))
}

printOutput(add(5,2));

//declarando valores default pra um parametro
const execute = (a: number, b: number = 1) => a + b; //os valores default tem q ser declarados por ultimo nos parametros pra poderem ser omitidos
//posso chamar a funçao passando um valor so, pq o segundo é padrão

printOutput(execute(10));

//spread operator
const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];

activeHobbies.push(hobbies[0], hobbies[1]);

activeHobbies.push(...hobbies);
// o spread coloca todos os valores individualmente (nao passa como um array, mas como umna lista de um array) para o outro array
//ou seja, é como se desse um push pra cada elemento do hobbies

//tbm pode usar com objeto
const person = {
    name: 'Max',
    age: 30
};

const copiedPerson = person; //quando se faz isso, esta apenas copiando o endereço de memoria de person pra copied person

const truePerson = { ...person } //assim se faz uma copia real do objeto

// da pra usar o spread operators quando vc espera um grande numero de parametros em uma funcao
//qaundo vc espera receber uma lista de valores (com tamanho indeterminado)
const somar = (...numeros: number[]) => {
    numeros.reduce((currentResult, currentValue) => {
        return currentResult + currentValue
    }, 0); //reduce faz uma operacao em cada elemento do array
}

//coloca nessa variaveis, os valores do array hobbies, respectivamente o valor do indice 0 e 1
const [hobby1, hobby2] = hobbies;

//criar um array exatamente igual ao hobbies
const [...remainingHobbies] = hobbies;

const pessoa = {
    firstName: 'Davi',
    age: 29
}

//copia exatamente os respectivos valores do objeto pra esses dois novos objetos com mesmo nome dos atributos do objeto
//nao precisa estar na ordem, igual ao exemplo acima com arrays
//os nomes dentro do {} preciosam ser os mesmos dos atributos!!!
const { firstName, age } = pessoa;

//quando coloca com : e um novo nome, este novo nome sobrescreve o nome do atributo  do objeto pessoa
const { firstName: primeimro_nome, age: idade } = pessoa;