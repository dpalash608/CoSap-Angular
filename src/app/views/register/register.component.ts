import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent {
  username: string = '';
  name : string ='';
  contact: string = '';
  email : string ='';
  password: string = '';
  register()
  {
    sessionStorage.clear();
    const url = "http://localhost:8080/api/v1/employee";
    const data = {
        'iNumber' : this.username,
        'empName' :this.name,
        "empMail":this.email,
        "empContact":this.contact,
        "password":this.password
    };
    const other_params = {
      body : JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      method : "POST"
  };
    fetch(url,other_params)
        .then(function(response) {
            if (response.ok) {
              window.alert("Register Success");
              sessionStorage.setItem('id', this.username); 
              window.open("http://localhost:4200/#/dashboard","_self");
              return response.json();
            } else {
              window.alert("Registration Failed");
              console.log("Could not reach the API: " + response.statusText);
            }
        }).then(function(data) {
            console.log("Succesfull"+ data.encoded);

        }).catch(function(error) {
          
          console.log("Session"+sessionStorage.getItem('id'));
          window.open("http://localhost:4200/#/dashboard","_self");
        });
    return true;
  }

  constructor() { }

}
