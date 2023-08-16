import { Component } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
}) 
export class LoginComponent {

  user:User = new User()
  loginStatus: String | null = '' 
  
  constructor(private userService : UserService) {}

  login(formData : any){
    console.log(formData);

      this.user.username = formData.value.username;
      this.user.password = formData.value.password;
        console.log(this.user);
      this.loginStatus = localStorage.getItem('resMessage');
      this.userService.loginUser(this.user);  
    }

}
