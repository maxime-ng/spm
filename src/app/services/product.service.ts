import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { Product } from "../models/product";
import { TreeNode } from 'primeng/api';


@Injectable({
  providedIn: "root",
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  private apiURL = environment.urlapi;

  getAll(): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set("Access-Control-Allow-Origin", "*");
    return this.httpClient.get<any>(
      this.apiURL + "products/selectall"
    );
  }

  save(name: String, productidentifier: String): Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.set("Access-Control-Allow-Origin", "*");
    return this.httpClient.get<any>(this.apiURL+"products/insert?identifier="+productidentifier+"&name="+name);
  }

  delete(id : Uint8Array[]): Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.set("Access-Control-Allow-Origin", "*");
    return this.httpClient.get<any>(this.apiURL+"products/delete?productIdList="+id);
  }

  update(id: Uint8Array, productidentifier: String, name: String): Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.set("Access-Control-Allow-Origin", "*");
    return this.httpClient.get<any>(this.apiURL+"products/update?id="+id+"&identifier="+productidentifier+"&name="+name);
  }

  errorHandler(error: any) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }

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