import { Component, OnInit } from '@angular/core';
import { ProductForm } from './product.form';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private productList: Array<ProductForm>;
  constructor() { }

  ngOnInit() {
    this.productList = [
      new ProductForm(1, '第一个商品', 1.99, 1.5, '这是一个商品,wolalalalal', ['电子产品', '硬件设备']),
      new ProductForm(2, '第二个商品', 2.99, 4.5, '这是一个商品,wolalalalal', ['电子产品', '硬件设备']),
      new ProductForm(3, '第三个商品', 3.99, 3.5, '这是一个商品,wolalalalal', ['电子产品', '硬件设备']),
      new ProductForm(4, '第四个商品', 4.99, 4.5, '这是一个商品,wolalalalal', ['电子产品', '硬件设备']),
      new ProductForm(5, '第五个商品', 5.99, 2.5, '这是一个商品,wolalalalal', ['电子产品', '硬件设备']),
      new ProductForm(6, '第六个商品', 6.99, 3.5, '这是一个商品,wolalalalal', ['电子产品', '硬件设备'])
    ];
  }

}
