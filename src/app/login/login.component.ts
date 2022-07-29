import { Component, OnInit } from "@angular/core";
import { UntypedFormBuilder, UntypedFormGroup, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  form: UntypedFormGroup;
  loading = false;

  constructor(
    private fb: UntypedFormBuilder,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {
    this.form = this.fb.group({
      user: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  ngOnInit(): void {}

  connexion() {
    const user = this.form.value.user;
    const password = this.form.value.password;

    if (user == "maxime" && password == "admin123") {
      // Redirection vers le dashboard
      this.fakeLoading();
    } else {
      this.router.navigate(["/login"]);
      //Affiche message d'erreur
      this.error();
      this.form.reset();
    }
  }

  error() {
    this._snackBar.open("ces identifiants ne corespondent à aucun utilisateur", "", {
      //position/ emplacement du message d'erreur ainsi que son temps d'apparition
      duration: 3000,
      horizontalPosition: "center",
      verticalPosition: "bottom",
    });
  }

  fakeLoading() {
    this.loading = true;
    setTimeout(() => {
      //Redirection vers le dashbord
      this.router.navigate(["admindashboard"]);
    }, 1500);
  }
}
