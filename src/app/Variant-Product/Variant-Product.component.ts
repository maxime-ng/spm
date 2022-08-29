import { Component, Input, OnInit } from "@angular/core";
import { VariantproductService } from "../services/variant-product.service";
import { Product } from "../models/product";
import { Table } from "primeng/table";
import { TranslateService } from "@ngx-translate/core";
//import { table } from "console";

@Component({
  selector: "app-test2",
  templateUrl: "./Variant-Product.component.html",
  styleUrls: ["./Variant-Product.component.scss"],
  
})

export class VariantProductComponent implements OnInit {
  rows = 4;
  products: Product[] = [];

  element = event?.currentTarget as HTMLInputElement;
  cols: any[] = [];
  productDialog: boolean = true;

  highlighted: any;
  //display of the new product 
  displaySaveDialog: boolean = false;
  submitted: boolean = false;

  //product initialization
  product: Product = {
    productid: new Uint8Array(2),
    productidentifier: '',
    name: ''
  };


   //product initialization for update
  selectedProducts: Product = {
    productid: new Uint8Array(2),
    productidentifier: '',
    name: ''
  };

 


  constructor(private variantproductService: VariantproductService, public translate: TranslateService,) {}

  ngOnInit(): void {
    this.variantproductService.getProductwithvariant().then(data => this.products = data);
    this.cols = [
      {field: "id", header: "Productidentifier"},
      {field: "name", header: "Name"}
    ];
  }

 

//function that clears the filters applied to the table
clear(table: Table) {
  table.clear();
}

}





