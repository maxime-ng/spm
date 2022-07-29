import { Component, OnInit } from "@angular/core";
import { ProductService } from "../services/product.service";
import { Product } from "../models/product";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProduct();
  }

  // getProduct() {
  //   this.productService.getAll().subscribe(resp => {
  //     console.log(resp);
  //     this.products = resp;
  //   });
  // }

  getProduct() {
    this.productService.getAll().subscribe((data: Product[]) => {
      this.products = data;
      console.log(this.products);
    });
  }
}
