import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserLoginReq } from 'src/app/models/user-login-req';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  signInForm: FormGroup;
  userLogin: UserLoginReq;
  private helper = new JwtHelperService();
  constructor(private router: Router, private authSer: AuthServiceService) {
    this.signInForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
    this.userLogin = {
      email: '',
      password: '',
    };
  }
  decodeJWT(token: string) {
    const decodedToken = this.helper.decodeToken(token);
    console.log('lll', decodedToken);
    return decodedToken;
  }

  signIn() {
    if (this.signInForm.valid) {
      this.userLogin.email = this.signInForm.get('email')!.value;
      this.userLogin.password = this.signInForm.get('password')!.value;
      this.authSer.signIn(this.userLogin).subscribe((data) => {
        console.log('iii', data);
        localStorage.setItem('isLogged', 'true');
      });
    }
  }

  ngOnInit(): void {
    if (localStorage.getItem('isLogged')) this.router.navigateByUrl('/classes');
  }
}
