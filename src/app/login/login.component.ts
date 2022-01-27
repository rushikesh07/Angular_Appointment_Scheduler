import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
   form: FormGroup = new FormGroup({
     username: new FormControl(''),
     password: new FormControl(''),
   });

   Name:string = "";
   Password:any = "";


  constructor(
    private route : Router){}

  ngOnInit(): void {
    
  }

  goTo(){
    sessionStorage.setItem("userName",this.Name);
    sessionStorage.setItem("password",this.Password);
    this.route.navigate(['/home']);
  }

}
