import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdmindashboardComponent } from "./admindashboard/admindashboard.component";
import { LoginComponent } from "./login/login.component";
import { ProductComponent } from "./product/product.component";
import { ProjetComponent } from "./projet/projet.component";

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent },

  {
    path: "admindashboard",
    component: AdmindashboardComponent,
    children: [
      { path: "projet", component: ProjetComponent },
      { path: "product", component: ProductComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
