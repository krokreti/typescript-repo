class Department {
    //o nome de cada campo é field (em ingles)
    // name: string;
    //colocando valor default em um campo
    teste: string = 'Field';
    
    private employees:string[] = [];

    //construtor é executado quando um objeto/classe é criado
    //no construtor podemos colocar propriedades que queremos que sejam criadas e inicializadas (quando fizer isso, temos q especificar se são public ou private)
    //essa forma de incializar é só um atalho, nao precisa ser necessariamente assim
    constructor(private id: number, public age: number, public name: string, teste: string='default') {
        //ele vai passar o valor do parametro para o name quando criado
        this.teste = teste;
    }

    describe() {
        //para se referir a uma variavel que está na classe, deve-se usar a palavra this.
        //sem o this, ele vai procurar por alguma variável global...
        // o this referencia pra esta instancia criada
        console.log('Department: ' + this.name)
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length)
        console.log(this.employees)
    }
}

//instanciando um objeto da classe Department

const accounting = new Department(1, 15,'Accounting');

accounting.addEmployee('Max');
accounting.addEmployee('Manu')

//isto é uma má pratica, pq faz com q tenha varias formas de se adicionar, e o ideal é uma
//por isso, o campo employee deve ser privado, para que as variaveis nao tenham acesso direto para modifica-la
// accounting.employees[2] = 'Clovis'

accounting.printEmployeeInformation();

console.log(accounting);