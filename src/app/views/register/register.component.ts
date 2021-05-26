import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent {
  username: string = '';
  name : string ='';
  clickme() {

    this.check(this.name,this.username);

  }
  check(name,username)
  {
    
    console.log('it does nothing',username);
    console.log('it does nothing',name);

    const url = "http://localhost:8080/api/v1/employee";
    const data = {
        'iNumber' : username,
        'empName' :name
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
                return response.json();
            } else {
                throw new Error("Could not reach the API: " + response.statusText);
            }
        }).then(function(data) {
            console.log("Yo"+ data.encoded);
        }).catch(function(error) {
          console.log("Yo Error"+  error.message);
        });
    return true;

  }

  constructor() { }

}
