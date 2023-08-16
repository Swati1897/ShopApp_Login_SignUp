import { Component } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { NgForm }   from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  user: User = new User();

  confirmPassword = ''
  signUpStatus = ''
  errorMessage = ''

  constructor(private userService : UserService ) {}

  save(formData : any ){
    this.user.username = formData.value.username;
    this.user.password = formData.value.password;
    this.confirmPassword = formData.value.cpassword;

    console.log("SignUp User", this.user);

    if(this.user.password == this.confirmPassword ){
      this.userService.saveUser(this.user).subscribe(data =>{
        this.signUpStatus = data;

       // console.log("signUpStatus==>", this.signUpStatus)
      })
    }else{
      this.errorMessage = "Password is not matched ..Please try again."
    }
  }


}
