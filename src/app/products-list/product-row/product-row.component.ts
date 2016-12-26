import {Component, OnInit} from '@angular/core';
import { Product } from '../../app'

@Component({
    selector: 'app-product-row',
    templateUrl: './product-row.component.html',
    styleUrls: ['./product-row.component.css'],
    host: {'class': 'item'},
    inputs: ['product']
})
export class ProductRowComponent implements OnInit {

    product: Product;

    constructor() {
    }

    ngOnInit() {
    }

}
