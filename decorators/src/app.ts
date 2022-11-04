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

//pode se colocar mais de um decorator em uma funçao, e a ordem de execuçao é de baixo pra cima

// ---------------------------

//esse target é o prototype do objeto
function Log(target: any, propertyName: string) {
    console.log('Property decorator!');
    console.log(target, propertyName);
}
//para metodos set e funcoes
function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log(target, name, descriptor)
}
//para parametros
function Log3(target: any, name: string, position: number) {
    console.log(target, name, position)
}

class Product {
    //quando vc coloca um decorator em um atributo/property, vc tem q passar dois parametros
    //o primeiro parametro é o target e o segundo é o nome do atributo
    //este decorator é executado quando a classe é registrada pelo javascript
    @Log
    title: string;
    private _price: number;

    @Log2
    set price(val: number) {
        if(val > 0) {
            this._price = val;
        } else {
            throw new Error('Invalid price - should be positive!')
        }
    }

    constructor(t: string, p: number) {
        this.title = t;
        this._price = p;
    }

    @Log2
    getPriceWithTax(@Log3 tax: number) {
        return this._price * (1 + tax);
    }

    
}