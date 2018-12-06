import { Component, OnInit } from '@angular/core';
import { AddCategory } from '../../model/add-category';
import { Login } from '../../model/login';
import { LoginServiceService } from '../../service/login-service.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  public getCatInfo: Array<AddCategory> = [];
  loginObj : Login;
  constructor(private loginSer : LoginServiceService) { 
    this.loginObj = new Login();
  }
 
   
  ngOnInit() {
  }
  login(){
    alert(this.loginObj.userEmailId);
    alert(this.loginObj.userPassword);
    this.loginObj.adminFlag=false;
    this.loginSer.addUser(this.loginObj).subscribe(getLoginObj => {
      alert("Successfully inserted ...........................");
      sessionStorage.setItem('loginSession',this.loginObj.userEmailId);
      var x = sessionStorage.getItem('loginSession ');
      console.log('Session Name is : ' + sessionStorage.getItem('loginSession'))
    })
  }
}
