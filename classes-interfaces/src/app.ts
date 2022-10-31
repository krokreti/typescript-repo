//define um custom type, diferente de classes
//nao pode definir valores para os atributos
//interfaces definem a estrutura de um objeto, funcao, etc
//interfaces nao podem ter union types, nao podem ser instancializadas
//interfaces so existem no TS
//força as classes a ter certas features, estruturas, funcoes
//nao pode declarar um atributo como public ou private em uma interface
//somente readonly
//uma interface pode herdar varias interfaces
interface Person {
    name: string;
    age: number;
    //interrogacao indica que este atributo NAO É OBRIGATORIO
    lastName?: string;

    greet(phrase: string): void;

    //em um metodo se colocar a interrogacao nos parametros, deve-sse colocar um valor default
    calculate(n1?: number): number;
}

//usa a interface como um tipo
let user1: Person;

user1 = {
    name: 'Davi',
    age: 29,
    greet(phrase) {
        console.log(phrase + " " + name)
    },
    calculate(n1 = 0) { //atribuindo um valor default
        return n1;
    }
};

user1.greet("Olá")