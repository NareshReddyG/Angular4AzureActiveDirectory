import { Component,OnInit  } from '@angular/core';

import { Adal4Service } from 'adal-angular4';

const config: adal.Config = {                      
  tenant: 'nareshgarivioutlook.onmicrosoft.com',    //Tenant Name. Example: naresh.onmicrosoft.com                  // <-- ADD
  clientId: 'XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX' //AppId
}     

@Component({
  selector: 'aa4-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'My World';

  ngOnInit() {
    
        // Handle callback if this is a redirect from Azure
        this.service.handleWindowCallback();
    
        // Check if the user is authenticated. If not, call the login() method
        if (!this.service.userInfo.authenticated) {
          this.service.login();
        }
    
        // Log the user information to the console
       
        console.log(this.service.userInfo.profile);
      }


  constructor(private service: Adal4Service) {      // <-- ADD
    this.service.init(config);                      // <-- ADD
  }    
}
