import { Component, Input, OnInit } from "@angular/core";
import { trigger,state,style,transition,animate } from '@angular/animations';
import { ProductService } from "../services/product.service";
import { Product } from "../models/product";
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { Table } from "primeng/table";
//import { table } from "console";



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

  SelectedProducts: Product[] = [];


  constructor(private productService: ProductService, private confirmationService: ConfirmationService,  private messageService: MessageService) {}

  ngOnInit(): void {
    this.getProduct();
    //this.productService.getProductwithvariant().then(data => this.products = data);
    this.cols = [
      {field: "productidentifier", header: "Productidentifier"},
      {field: "name", header: "Name"}
    ];
  }

  showSaveDialog(editar: boolean){
    // if(editar){
    //     this.product = this.selectedProducts;
    //     return;
    // }else{
    //   this.messageService.add({severity: 'warn', summary: "Warning!", detail: "select product please!"});
    //   this.product = new Product();
    // }
    this.displaySaveDialog = true;
  }

  saveProduct(){
    if (this.submitted) {
      this.productService.update(this.product.productid, this.product.productidentifier, this.product.name).subscribe(
        (result:any) => {
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product updated', life: 3000});
          this.product = result;
        },
        error =>{
          console.log(error);
        }
      )
    }
    else{ 
    this.productService.save(this.product.name, this.product.productidentifier
    ).subscribe(
      (result:any) => {
        let product = result as Product;
        this.products.push(product);
        this.messageService.add({severity: 'success', summary: "resultat", detail: "Sucessfully added product!"})
        this.displaySaveDialog = false;
      },
      error =>{
        console.log(error);
      }
    )
  }
  }

    updateProduct(product: Product){
      this.displaySaveDialog = true;
      this.product = product;
      this.submitted = true;
    }

  getProduct() {
    this.productService.getAll().subscribe((result: any) => {
      //this.products = data;
      for(let i=0; i<result.length; i++){
        let product = result[i] as Product;
        this.products.push(product);
      }},
      error => {
        console.log(error);
      }
    );
  }


  editProduct(product: Product) {
    // this.product = {...product};
    // this.productDialog = true;
}


deleteProduct(product: Product) {
  // this.confirmationService.confirm({
  //     message: 'Are you sure you want to delete ' + product.name + '?',
  //     header: 'Confirm',
  //     icon: 'pi pi-exclamation-triangle',
  //     accept: () => {
  //       this.productService.delete(product.productid).subscribe(
  //         (result:any) =>{
  //           this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Deleted', life: 3000});
  //           this.deleteObject(product.productid);
  //         },
  //         error =>{
  //           console.log(error);
  //         }
  //       )
  //     }
  // });
}

deleteObject(id: Uint8Array){
  let index = this.products.findIndex((e) => e.productid == id);
  if(index != -1){
    this.products.splice(index, 1);
  }
}



//delete many products
deleteSelectedProducts(){
  this.confirmationService.confirm({
    message: 'Are you sure you want to delete the selected products?',
    header: 'Confirm',
    icon: 'pi pi-exclamation-triangle',
    accept: () => {
      let SelectedProductIds: Uint8Array[] = [];
      for(let i = 0; i<this.SelectedProducts.length; i++){
        SelectedProductIds[i] = this.SelectedProducts[i].productid;
      }
      this.productService.delete(SelectedProductIds).subscribe(
        (result:any) =>{
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Deleted', life: 3000});
          for (let index = 0; index < SelectedProductIds.length; index++) {
            this.deleteObject(SelectedProductIds[index]);
          }
        },
        error =>{
          console.log(error);
        }
      )
    }
});
}

clear(table: Table) {
  table.clear();
}

duplicateProduct(product: Product){
  let pro: Product = {
    productid: new Uint8Array(2),
    productidentifier: '',
    name: ''
  };
  pro.name = product.name+"_copie";
  pro.productidentifier = product.productidentifier+"_copie";
  this.productService.save(pro.name, pro.productidentifier
    ).subscribe(
      (result:any) => {
        let index = this.products.findIndex((e) => e.productid == product.productid);
        this.products.splice(index+1,0,pro);
        this.messageService.add({severity: 'success', summary: "resultat", detail: "Sucessfully duplicated product!"})
      },
      error =>{
        console.log(error);
      }
    )}



hideDialog() {
  this.displaySaveDialog = false;
  this.submitted = false;
}

consultProduct(product : Product){

}

}


