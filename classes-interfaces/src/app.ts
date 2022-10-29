class Department {
    //o nome de cada campo é field (em ingles)
    name: string;
    //colocando valor default em um campo
    teste: string = 'Field';
    
    //construtor é executado quando um objeto/classe é criado
    constructor(n: string) {
        //ele vai passar o valor do parametro para o name quando criado
        this.name = n;
    }

    describe() {
        //para se referir a uma variavel que está na classe, deve-se usar a palavra this.
        //sem o this, ele vai procurar por alguma variável global...
        // o this referencia pra esta instancia criada
        console.log('Department: ' + this.name)
    }
}

//instanciando um objeto da classe Department

const accounting = new Department('Accounting');

console.log(accounting);