import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdmindashboardComponent } from "./admin-dashboard/admin-dashboard.component";
import { DragDropComponent } from "./drag-drop/drag-drop.component";
import { LoginComponent } from "./login/login.component";
import { ProductComponent } from "./product/product.component";
import { ArborescenceComponent } from "./arborescence/arborescence.component";
import { variantproductComponent } from "./variant-product/variant-product.component";

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "logout", component: LoginComponent },

  {
    path: "admindashboard",
    component: AdmindashboardComponent,
    children: [
      { path: "product", component: ProductComponent },
      { path: "test", component: ArborescenceComponent },
      { path: "dragdrop", component: DragDropComponent },
      { path: "variantproduct", component: variantproductComponent },


    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
