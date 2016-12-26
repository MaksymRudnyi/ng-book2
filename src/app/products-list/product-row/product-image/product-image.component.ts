import {Component, OnInit} from '@angular/core';
import { Product } from '../../../app'

@Component({
    selector: 'app-product-image',
    templateUrl: './product-image.component.html',
    styleUrls: ['./product-image.component.css'],
    host: {'class': 'ui small image'},
    inputs: ['product']
})
export class ProductImageComponent implements OnInit {

    product: Product;

    constructor() {
    }

    ngOnInit() {
    }

}
