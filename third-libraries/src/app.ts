import _ from 'lodash';
import { Product } from './products.model';
import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import {validate} from 'class-validator';

console.log(_.shuffle([1,2,3,4,5]));

const products = [
    {
        title: 'Lampada',
        price: 12.99
    },
    {
        title: 'Ar Condicionado',
        price: 15.89
    }
]

const loadedProducts = plainToClass(Product, products);

console.log(loadedProducts)

const newProd = new Product('TV', 11.90)
validate(newProd).then(errors => {
    if(errors.length > 0) {
        console.error(errors)
    } else {
        console.log('funcionou')
    }
})