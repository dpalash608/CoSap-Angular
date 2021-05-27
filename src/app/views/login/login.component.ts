import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent { 

  username: string = '';
  password : string ='';

  login()
  {
    if(this.username=="admin" && this.password=="admin")
    {
      window.open("http://localhost:4200/#/dashboard-admin","_self");
    }
    else{
    sessionStorage.clear();
    const url = "http://localhost:8080/api/v1/employee";
    console.log(this.username,this.password);
    sessionStorage.setItem('id', this.username); 
    var flag;
    fetch(url)
    .then(response => response.json())
    .then(data => {
      for (let i = 0; i < data.length; i++) {
        if(this.username == data[i].iNumber && this.password == data[i].password )
        {
          flag = 1;
          break;
        }
        else{
          flag =0;
        }
      }
      if(flag == 1)
    {
      console.log("flag"+flag);
      sessionStorage.setItem('id',this.username);
      window.open("http://localhost:4200/#/dashboard","_self");
    }
    else if(flag == 0)
    {
      window.alert("Incorrect user id and password");
    }
    });
  }
  }
  register()
  {
    console.log("clicked me");
    window.open("http://localhost:4200/#/register","_self");
  }
}
