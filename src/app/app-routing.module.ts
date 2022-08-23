import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdmindashboardComponent } from "./admin-dashboard/admin-dashboard.component";
import { DragDropComponent } from "./drag-drop/drag-drop.component";
import { LoginComponent } from "./login/login.component";
import { ProductComponent } from "./product/product.component";
import { ProjetComponent } from "./projet/projet.component";
import { TestComponent } from "./test/test.component";

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "logout", component: LoginComponent },

  {
    path: "admindashboard",
    component: AdmindashboardComponent,
    children: [
      { path: "projet", component: ProjetComponent },
      { path: "product", component: ProductComponent },
      { path: "test", component: TestComponent },
      { path: "dragdrop", component: DragDropComponent },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
