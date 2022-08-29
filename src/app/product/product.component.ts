import { Component, Input, OnInit } from "@angular/core";
import { trigger,state,style,transition,animate } from '@angular/animations';
import { ProductService } from "../services/product.service";
import { Product } from "../models/product";
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { Table } from "primeng/table";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"],
  
})

export class ProductComponent implements OnInit {
  rows = 4;
  products: Product[] = [];

  element = event?.currentTarget as HTMLInputElement;
  cols: any[] = [];
  productDialog: boolean = true;

  highlighted: any;
  /**
   * display of the new product 
   */
  displaySaveDialog: boolean = false;
  submitted: boolean = false;

  /**
   * product initialization
   */
  product: Product = {
    productid: new Uint8Array(2),
    productidentifier: '',
    name: ''
  };

/**
 * product initialization for update
 */
  selectedProducts: Product = {
    productid: new Uint8Array(2),
    productidentifier: '',
    name: ''
  };

  /**
   * product selected initialization 
   */
  SelectedProducts: Product[] = [];


  /**
   * 
   * @param productService 
   * @param confirmationService 
   * @param messageService 
   * @param translate 
   */
  constructor(private productService: ProductService, private confirmationService: ConfirmationService,  private messageService: MessageService, public translate: TranslateService,) {}

  /**
   * 
   */
  ngOnInit(): void {
    this.getProduct();
    this.cols = [
      {field: "productidentifier", header: "Productidentifier"},
      {field: "name", header: "Name"}
    ];
  }

  /**
   * displays the product modification and addition window
   * @param editar 
   */
  showSaveDialog(editar: boolean){
    this.displaySaveDialog = true;
  }

  /**
   * this.submitted = true in updateProduct. it helps us diferenciate an update action and an add action. 
   * 
   */
  saveProduct(){
    if (this.submitted) {
      this.productService.update(this.product.productid, this.product.productidentifier, this.product.name).subscribe({
        next:(result:any) => {
          this.messageService.add({severity:'success', summary: 'Successful', detail: this.translate.instant('tableproduct.MessageupdateProduct'), life: 3000});
          this.product = result;
        },
      })
    }
    else{ 
    this.productService.save(this.product.name, this.product.productidentifier
    ).subscribe({ 
      next:(result:any) => {
        let product = result as Product;
        //push add a new product at the end of the table
        this.products.push(product);
        this.messageService.add({severity: 'success', summary: "resultat", detail: this.translate.instant('tableproduct.MessagenewProduct')})
        this.displaySaveDialog = false;
      },
    })
  }
  }

  /**
   * 
   * @param product 
   */
  updateProduct(product: Product){
    this.displaySaveDialog = true;
    this.product = product;
    this.submitted = true;
  }

  /**
   * get all the product from the back
   */
  getProduct() {
    this.productService.getAll().subscribe({next:(result: Product[]) => {
      this.products = result;
    },
  });
  complete: () => {}
   error: () => {}
  }


/**
 * 
 * function that shifts the products after deleting a product
 * @param id : parameter
 */
deleteObject(id: Uint8Array){
  let index = this.products.findIndex((e) => e.productid == id);
  if(index != -1){
    this.products.splice(index, 1);
  }
}




/**
 * function that deletes products both global deletion and unitary deletion
 * 
 */
deleteSelectedProducts(){
  this.confirmationService.confirm({
    message: this.translate.instant('tableproduct.Messageconfirmationdelete'),
    header: 'Confirm',
    icon: 'pi pi-exclamation-triangle',
    accept: () => {
      let SelectedProductIds: Uint8Array[] = [];
      for(let i = 0; i<this.SelectedProducts.length; i++){
        SelectedProductIds[i] = this.SelectedProducts[i].productid;
      }
      this.productService.delete(SelectedProductIds).subscribe({
        next:(result:any) =>{
          this.messageService.add({severity:'success', summary: 'Successful', detail: this.translate.instant('tableproduct.Messagedeleteproduct'), life: 3000});
          for (let index = 0; index < SelectedProductIds.length; index++) {
            this.deleteObject(SelectedProductIds[index]);
          }
        },
      })
      complete: () => {}
      error: () => {}
    }
});
}


/**
 * function that clears the filters applied to the table
 * @param table 
 */
clear(table: Table) {
  table.clear();
}


/**
 * 
 * duplicate a product: create new product with the same properties than a product selected  + the "_copie" extension 
 * @param product 
 */
duplicateProduct(product: Product){
  let pro: Product = {
    productid: new Uint8Array(2),
    productidentifier: '',
    name: ''
  };
  pro.name = product.name+"_copie";
  pro.productidentifier = product.productidentifier+"_copie";
  this.productService.save(pro.name, pro.productidentifier
    ).subscribe({ 
      next:(result:any) => {
        let index = this.products.findIndex((e) => e.productid == product.productid);
        //splice insert the duplicated product after the original product
        this.products.splice(index+1,0,pro);
        this.messageService.add({severity: 'success', summary: "resultat", detail: this.translate.instant('tableproduct.messageduplicateproduct')}) 
      },
      
    })
    complete: () => {}
    error: () => {}
}

/**
 * close the window after creating and modifying a product
 */
hideDialog() {
  this.displaySaveDialog = false;
  this.submitted = false;
}

consultProduct(product : Product){
}

ManageProductVariant(){}

}


