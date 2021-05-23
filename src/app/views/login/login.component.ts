import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent { 
  onbuttonclick()
  {
    console.log("clicked me");
    window.open("http://localhost:4200/#/register","_self");
  }
}
