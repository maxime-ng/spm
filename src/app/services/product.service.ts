import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  private apiURL = environment.urlapi;

  getAll(): Observable<any> {
    // return this.httpClient.get(this.apiURL + "products", {
    //   headers: new HttpHeaders({ "Origin": "*" }),
    // });

    let headers = new HttpHeaders();
    // headers = headers.set("Content-Type", "application/json");
    // headers.set("Origin", "*");
    headers = headers.set("Access-Control-Allow-Origin", "*");

    return this.httpClient.get<any>(
    this.apiURL + "products"
    // , { headers: headers }
    
   );

    // .pipe(catchError(this.errorHandler));
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
}
