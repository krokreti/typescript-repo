// Code goes here!
//tipos genericos sao pra dar um melhor feedback sobre o resultado e os metodos disponiveis para uma variavel
const arr: Array<string> = ['Davi', 'Pinheiro']

const promise: Promise<number> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
        }, 2000
    )
})

promise.then(data => {
    data.toPrecision();
})

//quando se tem uma funçao que recebe dois objetos de tipos diferentes como parametros, temos q associalos a tipos genericos
//para que o retorno seja visto (como na linha 24, consigo ver os atributos)

function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB)
}

const mergedObj = merge({name: 'Davi', hobbies: ['Sporting'] }, {age: 30} )
console.log(mergedObj.age)

//assim se declara uma variavel que faz parte de um obbjeto, usando extends keyof, indicado q U é uma chave de T
function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return 'Value' + obj[key];
}
//se eu declarar o objeto com atributo name, o key so podera ser name
extractAndConvert({name: 'Davi'}, 'name');

//classes genericas
//classes genericas servem para que voce possa utiliza-las com varios tipos de objetos possíveis
class DataStorage<T> {
    private data: T[] = []

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data]
    }
}

//podemos usar como string por exemplo
const textStorage = new DataStorage<string>();
textStorage.addItem('Davi');
textStorage.addItem('Pinheiro');
textStorage.removeItem('Pinheiro');
console.log(textStorage.getItems());

//exemplo com number
const numberStorage = new DataStorage<number>();
numberStorage.addItem(1);
numberStorage.addItem(20);
numberStorage.removeItem(1);
console.log(numberStorage.getItems());

interface CurseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

//tipos genericos de utilidade 
//https://www.typescriptlang.org/docs/handbook/utility-types.html
//Partial ele vai dizer pro ts que todos os atributos são opcionais, por isso conseguimos atribuir um objeto vazio "{}" na declaração.
function createCurseGola(title: string, description: string, completeUntil: Date): CurseGoal  {
    let curseGoal: Partial<CurseGoal> = {};
    curseGoal.title = title;
    curseGoal.description = description;
    curseGoal.completeUntil = completeUntil;
    return curseGoal as CurseGoal;
}

//usa-se union types quando vc quer permitir que o usuario possa utilizar varios tipos de uma vez, quando vc quer ser flexível em cada chama de método
//usa-se generic types quando vc permite que o usuario possa utilizar varios tipos porém se ele escolher um tipo, será apenas este, com generic vc nao será flexível a varios tipos