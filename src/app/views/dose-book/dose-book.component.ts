import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dose-book',
  templateUrl: './dose-book.component.html'
})
export class DoseBookComponent  {

  agegrp : String;
  stock : String;
  vaccine:any;


  stockload()
  {
    console.log(this.agegrp,this.stock);
    const url = "http://localhost:8080/api/v1/vaccine";
    fetch(url)
    .then(response => response.json())
    .then(data => {
      for (let i = 0; i < data.length; i++) {
        if(data[i].ageGrp == this.agegrp)
        {
          this.vaccine = Number(this.stock) + Number(data[i].stock);
          this.postvaccine(this.vaccine,data[i].ageGrp);
        }
        if(data[i].ageGrp == this.agegrp)
        {
          this.vaccine = Number(this.stock) + Number(data[i].stock);
          this.postvaccine(this.vaccine,data[i].ageGrp);
        }
        if(data[i].ageGrp == this.agegrp)
        {
          this.vaccine = Number(this.stock) + Number(data[i].stock);
          this.postvaccine(this.vaccine,data[i].ageGrp);
        }
      }
    }
    );
  }
  postvaccine( vaccinestock : any,agegrp:String)
  {
   
    const url = "http://localhost:8080/api/v1/vaccine";
    const data = {
        'ageGrp' : agegrp,
        'stock' :vaccinestock
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
              window.alert("Adding Success");
              return response.json();
            } else {
              window.alert("Adding Failed");
              console.log("Could not reach the API: " + response.statusText);
            }
        }).then(function(data) {
            console.log("Succesfull"+ data.encoded);

        }).catch(function(error) {
          window.open("http://localhost:4200/#/dashboard-admin","_self");
        });
    
  }
}
