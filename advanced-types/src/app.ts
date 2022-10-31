// Code goes here!
type Admin = {
    name: string,
    privileges: string[],
}

type Employee = {
    name: string,
    startDate: Date,
}
//cria uma intercecao de dois diferentes tipos
//mesma coisa que uma interface herdando de duas outras
type ElevatedEmployee = Admin & Employee;

const e1:ElevatedEmployee = {
    name: 'Max',
    privileges: ['server'],
    startDate: new Date() 
}

//cria intercecao de todos esses tipos
type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;