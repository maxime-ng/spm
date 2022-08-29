import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "../models/product";
import { TreeNode } from 'primeng/api';


@Injectable({
  providedIn: "root",
})
export class VariantproductService {
  constructor(private httpClient: HttpClient) {}

  getProductwithvariant(){
      return this.httpClient.get<any>('assets/products-variant.json')
      .toPromise()
      .then(res => <Product[]>res.data)
      .then(data => { return data; });
  }

  getFilesystem() {
    return this.httpClient.get<any>('assets/filesystem.json')
      .toPromise()
      .then(res => <TreeNode[]>res.data);
    }

    getLazyFilesystem() {
    return this.httpClient.get<any>('assets/filesystem-lazy.json')
      .toPromise()
      .then(res => <TreeNode[]>res.data);
    }
}