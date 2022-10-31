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

//type guards
type UnknownEmployee = Employee | Admin;

//type guards para comparar tipos
//type guards servem para checar se metodos ou propriedades existem antes de vc tentar usar
function printEmployeeInformation(emp: UnknownEmployee) {
    console.log('Name' + emp.name);
    //nao consigo printar privileges ou startDate pq nao é especifico dos 2, assim como name
    //para isso, tem q ser feita uma verificacao pra ver se o emp possui esses atributos
    if('privileges' in emp) {
        console.log('Privileges: ' + emp.privileges);
    }
    if('startDate' in emp) {
        console.log('Start Date: ' + emp.startDate);
    }
}

//type guards para comparar classes e objetos
class Car {
    drive() {
        console.log('Driving a car')
    }
}
class Truck {
    drive() {
        console.log('Driving a truck')
    }
    loadCargo(amount: number) {
        console.log('Loading a cargo... ' + amount)
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
    vehicle.drive();
    //da pra fazer com o in para comparar classes e objetos
    if('loadCargo' in vehicle) {
        vehicle.loadCargo(1000);
    }
    //da pra fazer com o instanceof q é recomendado
    if(vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
