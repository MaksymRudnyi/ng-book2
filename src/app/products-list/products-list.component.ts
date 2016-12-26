import {Component, EventEmitter, OnInit} from '@angular/core';
import {Product} from "../app";

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css'],
    inputs: ['productList'],
    outputs: ['onProductSelected']
})
export class ProductsListComponent implements OnInit {

    productList: Product[];

    onProductSelected: EventEmitter<Product>;

    currentProduct: Product;

    constructor() {
        this.onProductSelected = new EventEmitter();
    }

    ngOnInit() {
    }

    clicked(product: Product):void {
        this.currentProduct = product;
        this.onProductSelected.emit(product);
    };

    isSelected(product: Product): boolean {
        if (!product || !this.currentProduct) {
            return false;
        }
        return product.sku === this.currentProduct.sku;
    }

}
