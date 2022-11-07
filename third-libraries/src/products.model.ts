import { IsNotEmpty, IsNumber, IsPositive } from 'class-validator'

export class Product {
    //pra usar esses decorators tem q ir no tsconfig e descomentar o use experimental decorators
    @IsNotEmpty()
    title: string;

    @IsNumber()
    @IsPositive()
    price: number;

    constructor(t: string, p: number) {
        this.title = t;
        this.price = p;
    }

    getInformation() {
        return [this.title, `$${this.price}`];
    }
}