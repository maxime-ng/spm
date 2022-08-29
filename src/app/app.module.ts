import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClient, HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LoginComponent } from "./login/login.component";
import { AdmindashboardComponent } from "./admin-dashboard/admin-dashboard.component";


import { FormsModule } from '@angular/forms';
//pour le test à supprimer
import { NodeService } from './arborescence/nodeservice';
import { NodeServices } from './services/nodeservice';


// import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialExampleModule } from "./material-module";
import {PrimengModule} from "./primeng.module"
import { ProductComponent } from "./product/product.component";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
//pour le test à supprimer
import { ArborescenceComponent } from './arborescence/arborescence.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { variantproductComponent } from './variant-product/variant-product.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdmindashboardComponent,
    ProductComponent,
    ArborescenceComponent,
    DragDropComponent,
    variantproductComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PrimengModule,
    FormsModule,
    MaterialExampleModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  }),

  ],

  providers: [NodeService, NodeServices], 
  bootstrap: [AppComponent],
})
export class AppModule {}

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

