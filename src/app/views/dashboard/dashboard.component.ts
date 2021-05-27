import { Component, OnInit } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  vaccineA:Number = 0;
  vaccineB:Number = 0;
  vaccineC:Number = 0;
  stocks:any;
  inumber : String;
  tdate : String;
  agegrp: String;


  radioModel: string = 'Month';

  scdl18()
  { 
    //Get
    this.stocks =this.vaccineA;
    this.stocks= this.stocks-1;
    //Post of Vaccine
    const url = "http://localhost:8080/api/v1/vaccine";
    const data = {
      "stock": this.stocks.toString(),
      "ageGrp": "A" 
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
              window.alert("Booking Success");
              return response.json();
            } else {
              console.log("Could not reach the API: " + response.statusText);
            }
        }).then(function(data) {
            console.log("Succesfull"+ data.encoded);

        });
        let today = new Date().toLocaleDateString();
        //Post of register
    const url1 = "http://localhost:8080/api/v1/register";
    const data1= {
        "inumber":sessionStorage.getItem('id'),
        "agegrp":"A",
        "date":today,
        "status":"Booked"
    };
    const other_params1 = {
      body : JSON.stringify(data1),
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      method : "POST"
  };
    fetch(url1,other_params1)
        .then(function(response) {
            if (response.ok) {
              return response.json();
            } else {
              console.log("Could not reach the API: " + response.statusText);
            }
        }).then(function(data) {
            console.log("Succesfull"+ data.encoded);

        }).catch(function(error) {
          location.reload();
        });;

  }
  scdl45()
  {
    //Get
    this.stocks =this.vaccineC;
    this.stocks= this.stocks-1;
    //Post of Vaccine
    const url = "http://localhost:8080/api/v1/vaccine";
    const data = {
      "stock": this.stocks.toString(),
      "ageGrp": "C" 
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
              window.alert("Booking Success");
              return response.json();
            } else {
              console.log("Could not reach the API: " + response.statusText);
            }
        }).then(function(data) {
            console.log("Succesfull"+ data.encoded);

        });
        let today = new Date().toLocaleDateString();
        //Post of register
    const url1 = "http://localhost:8080/api/v1/register";
    const data1= {
        "inumber":sessionStorage.getItem('id'),
        "agegrp":"C",
        "date":today,
        "status":"Booked"
    };
    const other_params1 = {
      body : JSON.stringify(data1),
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      method : "POST"
  };
    fetch(url1,other_params1)
        .then(function(response) {
            if (response.ok) {
              return response.json();
            } else {
              console.log("Could not reach the API: " + response.statusText);
            }
        }).then(function(data) {
            console.log("Succesfull"+ data.encoded);

        }).catch(function(error) {
          location.reload();
        });;


  }
  scdl1845()
  {
    //Get
    this.stocks =this.vaccineB;
    this.stocks= this.stocks-1;
    //Post of Vaccine
    const url = "http://localhost:8080/api/v1/vaccine";
    const data = {
      "stock": this.stocks.toString(),
      "ageGrp": "B" 
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
              window.alert("Booking Success");
              return response.json();
            } else {
              console.log("Could not reach the API: " + response.statusText);
            }
        }).then(function(data) {
            console.log("Succesfull"+ data.encoded);

        });
        let today = new Date().toLocaleDateString();
        //Post of register
    const url2 = "http://localhost:8080/api/v1/register";
    const data2= {
        "inumber":sessionStorage.getItem('id'),
        "agegrp":"B",
        "date":today,
        "status":"Booked"
    };
    const other_params2 = {
      body : JSON.stringify(data2),
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      method : "POST"
  };
    fetch(url2,other_params2)
        .then(function(response) {
            if (response.ok) {
              return response.json();
            } else {
              console.log("Could not reach the API: " + response.statusText);
            }
        }).then(function(data) {
            console.log("Succesfull"+ data.encoded);

        }).catch(function(error) {
          location.reload();
        });;


  }

  ngOnInit(): void {

    const url = "http://localhost:8080/api/v1/vaccine";
    fetch(url)
    .then(response => response.json())
    .then(data => {
      for (let i = 0; i < data.length; i++) {
        if(data[i].ageGrp == "A")
        {
        this.vaccineA = +this.vaccineA + +Number(data[i].stock);
        }
        if(data[i].ageGrp == "B")
        {
        this.vaccineB = +this.vaccineB + +Number(data[i].stock);
        }
        if(data[i].ageGrp == "C")
        {
        this.vaccineC = +this.vaccineC + +Number(data[i].stock);
        }
      }
    }
    );

    fetch("http://localhost:8080/api/v1/register")
    .then(response => response.json())
    .then(data => {
      for (let i = 0; i < data.length; i++) {
        if(data[i].inumber == sessionStorage.getItem('id'))
        {
        this.tdate = data [i].date;
        this.agegrp = data[i].agegrp;
        }
      }
    }
    );

    this.inumber=sessionStorage.getItem('id');
  }
}
