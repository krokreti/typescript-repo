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
//esses parametros com underline significa que vc esta dizendo ao typescript nao se importar com estes parametros, que em algum momento serão usados na execução
function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    };
    return adjDescriptor;
}

class Printer {
    message = 'This Works!';

    @Autobind
    showMessage() {
        console.log(this.message);
    }
}

const p = new Printer();

const button = document.querySelector('button')!;
button.addEventListener('click', p.showMessage);

interface ValidatorConfig {
    [property: string] : {
        [validatableProp: string]: string[]
    }
}

const registeredValidators: ValidatorConfig = {};

//para atributos a gente nao pega o descriptor
function Required(target: any, propName: string) {
    //constructor.name pega o nome da funçao
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: ['required']
    }
}

function PositiveNumber(target: any, propName: string) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: ['positive']
    }
}

function validate(obj: any) {
    const objValidatorConfig = registeredValidators[obj.constructor.name];
    if(!objValidatorConfig) {
        return true;
    }
    let isValid = true;
    for (const prop in objValidatorConfig) {
        for (const validator of objValidatorConfig[prop]) {
            switch (validator) {
                case 'required':
                    //!! converte o valor pra booleano
                    isValid = isValid && !!obj[prop];
                    break;
                case 'positive':
                    isValid = isValid && obj[prop] > 0;
                    break;
            }
        }
    }
    return isValid;
}

class Course {
    @Required
    title: string;
    @PositiveNumber
    price: number;

    constructor(t: string, p: number) {
        this.title = t;
        this.price = p;
    }
}

const courseForm = document.querySelector('form')!;
courseForm.addEventListener('submit', event => {
    event.preventDefault();
    const titleEl = document.getElementById('title') as HTMLInputElement;
    const priceEl = document.getElementById('price') as HTMLInputElement;

    const title = titleEl.value;
    const price = +priceEl.value;

    const createdCouse = new Course(title, price);
    console.log(createdCouse)
})