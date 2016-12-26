import {Component, OnInit} from '@angular/core';

import {Product} from '../../../app'

@Component({
    selector: 'app-product-departament',
    templateUrl: './product-departament.component.html',
    styleUrls: ['./product-departament.component.css'],
    inputs: ['product']
})
export class ProductDepartamentComponent implements OnInit {

    product: Product;

    constructor() {
    }

    ngOnInit() {
    }

}
