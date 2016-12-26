import {Component} from '@angular/core';
import { Product } from 'app/app';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title = 'app works!';
    product: Product;
    products: Product[];

    constructor() {
        this.product = new Product(
            'NICEHAT',
            'A nice hat',
            '/resources/images/products/black-hat.jpg',
            ['Men', 'Accessories', 'Hats'],
            29.99
        );
        this.products = [
            new Product(
                'NICEHAT1',
                'A nice hat1',
                '/resources/images/products/black-hat1.jpg',
                ['Men1', 'Accessories1', 'Hats1'],
                99.23
            ),
            new Product(
                'NICEHAT2',
                'A nice hat2',
                '/resources/images/products/black-hat2.jpg',
                ['Men2', 'Accessories2', 'Hats2'],
                229.49
            ),
            new Product(
                'NICEHAT3',
                'A nice hat3',
                '/resources/images/products/black-hat3.jpg',
                ['Men3', 'Accessories3', 'Hats3'],
                229.99
            ),
            new Product(
                'NICEHAT4',
                'A nice hat4',
                '/resources/images/products/black-hat4.jpg',
                ['Men4', 'Accessories4', 'Hats4'],
                129.99
            )
        ]
    }

    productWasSelected(product: Product): void {
        console.log('Product clicked: ', product);
    }

}
