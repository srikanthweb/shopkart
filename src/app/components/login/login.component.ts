import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  model:any = {}

  ngOnInit(): void {
  }

  login(){
    
    console.log(this.model)
  }

}
