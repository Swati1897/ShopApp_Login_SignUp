import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  respData: string|undefined ;
  
  constructor( private userService : UserService) {}
  
  ngOnInit(): void {
    // throw new Error('Method not implemented.');

    this.userService.userProfile().subscribe((respData : any)=>{
      this.respData = respData;
    });
  }

}
