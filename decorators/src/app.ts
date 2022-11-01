function Logger(constructor: Function) {
    console.log(constructor)
}


//os decorators executam quando a classe é definida e nao quando é instancializada
@Logger
class Person {
    name: string = 'Davi';
    constructor() {
        console.log('Creating object')
    }
}

const pers = new Person();